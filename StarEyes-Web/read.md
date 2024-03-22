# 如何在Google Colab / 本地Windows运行环境中配置视频分析服务器

## 为什么要配置该视频分析服务器

### 视频分析服务器有什么用?

在本项目的架构中，**视频分析服务器**用于从部署在http://star-eyes.cloud/vstream 域名下的nginx服务器下载监控原视频，并**使用GPU算力**对视频进行分析。在分析出结果后，视频分析服务器将结果（即事件信息）回传至云端数据库。若没有视频分析服务器，则事件提醒模块无法发挥其应有的功能。

### 为什么本项目的视频分析服务器不集成在云端,而需手动配置?

掣肘我们做出这项决策的最主要因素为**成本因素**。以阿里云的ECS云服务器为例，支持GPU/CUDA计算的云服务器，价格通常需要数千每月。如此高昂的价格，对于我们这个初创团队而言有些难以承受。考虑到我们的目标用户通常具有较为稳定的机房和算力，我们认为将深度学习有关计算转移至用户侧是一个较为妥善的选择。我们为您准备了两**套深度学习计算部署方案**：第一套方案使用Google Colab的算力进行视频分析，第二套方案为在Windows本地部署计算环境。

### 两套方案各有哪些优劣？

若使用第一套方案——使用Colab部署，则您需要有一个**能够稳定访问Google的网络环境**。由于Colab免费版的限制，您可能会偶尔遇到失去Google云GPU连接的情况。该方案的优点是您无需为GPU付费，可以免费使用Google的资源。

若使用第二套方案——使用本地Windows部署，您需要准备一个**Nvidia GeForce 20系或以上**的GPU。需要此系列或更新GPU的原因是我们需要用到GPU中的CUDA计算模块用于深度学习有关计算。该方案的优点是工作时较为稳定、一劳永逸，在配置好后便无需费心。

### 安装的前置文件准备

- **DLC**文件夹: [点此下载](https://pan.baidu.com/s/1Kf_RAT4HYF-cHcX_x1k00A?pwd=0000)
- **LSTM_model**文件夹：[点此下载](https://pan.baidu.com/s/1q56phnbLtDjeAZTDn_6jUA?pwd=0000)
- **process.ipynb**文件：[点击此链接](https://colab.research.google.com/drive/1c7SMAXN2gJ0TPoXCSJweCcyasul_RDta?usp=sharing)，进入后点击*文件-下载-下载.ipynb*(需要能够访问Google的网络环境)

## Google Colab环境配置教程

### Google Colab 是什么?  为什么使用Google Colab?

Google Colab 是一个基于云端的 Jupyter notebook 环境，它可以在网页浏览器中运行，让任何有网络连接的人都可以实验机器学习和人工智能编程。Google Colab 的代码是在 Google 的云服务器上执行的，意味着您可以利用 Google 的硬件资源，包括 GPU 和 TPU，无论你的机器性能如何。

### 如何配置Colab?

在开始之前，您需要确保自己有一个Google账号，且具有能够稳定访问Google的网络环境。

#### 注册/登录 Google Drive

- 若您没有注册Google 云端硬盘，则注册一个免费账号。若有，则登录Drive。

- 将**DLC**文件夹（解压后）上传至“我的云端硬盘”目录下。

- 将**LSTM_model**文件夹（解压后）上传至“我的云端硬盘”目录下。

#### 打开Colab并进行配置

- 打开[此Notebook](https://colab.research.google.com/drive/1c7SMAXN2gJ0TPoXCSJweCcyasul_RDta?usp=sharing)。若您遇到了无法编辑Notebook的问题，可将其另存为副本再打开。

- 编辑第一个代码块中的信息，**确保此信息为您的真实信息**。该步骤非常重要，若未修改为正确信息，服务器将拒绝承认该进程分析视频后的结果真实性。

**连接环境并运行**

- 点击Colab网页右上角的“连接”按钮。请确保您连接的是GPU环境（而非CPU环境）。若您无法确认这一点，可以点击*连接-查看资源-更改运行时类型*查看当前的环境。

- 点击上方*代码执行程序-全部运行*。

在做完以上操作后，服务器将开始正常运行。

若您在运行过程中遇到BUG，请及时向开发者``chenhao2020@lzu.edu.cn``发送邮件反馈。

## 本地Windows环境配置教程

在进行本教程之前，请先确保您具有一块高于**Nvidia GeForce 20系**的GPU。

### 安装Anaconda

- 进入 anaconda 官网https://www.anaconda.com/products/distribution 
- 选择 Windows 版本，点击 Download，进行下载
- 双击下载好的安装文件，启动安装程序
- 安装完成后，启动*Anaconda Powershell Prompt (Conda)* 应用程序，进入命令行界面

### 在Anaconda中新建虚拟环境

- 使用``conda create -n dlc`` 创建名为dlc的虚拟环境（若安装过程中出现网络错误，可参照[此教程](https://blog.csdn.net/Yuyh131/article/details/102841814)配置pip国内镜像源）
- 使用`conda activate dlc` 进入dlc环境
- 使用`pip install deeplabcut[tf]` 指令安装deeplabcut环境

### 安装Jupyter Notebook （若该软件随Anaconda一同安装，则可跳过此步）

- 在`dlc`环境内的命令行界面输入`conda install jupyter notebook`，等待jupyter notebook安装完成。

### 使用Jupyter Notebook打开process.ipynb，修改其中Linux系统下的目录路径为Windows系统路径

- 确保您具有``DLC``文件夹和`LSTM_model`文件夹
- 将其中的Linux文件系统路径格式更改为Windows文件系统路径格式
- 在`dlc`环境界面的命令行中输入`jupyter notebook`命令，随后系统会自动在默认浏览器中打开jupyter notebook网页
- 在网页中打开process.ipynb
- 点击上方菜单栏中*内核-更换内核*,选择运行环境为`dlc`
- 点击上方菜单*单元格-运行所有*

在做完以上操作后，服务器将开始正常运行。

若您在运行过程中遇到BUG，或您对操作过程不甚明确，请及时向开发者``chenhao2020@lzu.edu.cn``发送邮件反馈。