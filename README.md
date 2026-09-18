<div align="center">
  <img src="https://i.imgur.com/FtcF9ZP.png" alt="MobaXterm 密钥生成器 Logo" width="120" />
  <h1>MobaXterm 密钥生成器与自定义工具 🚀</h1>
  <p><strong>快速、安全的许可证生成与自定义工具。</strong></p>
  
  <p>
    <a href="#"><img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge" alt="许可证" /></a>
    <a href="#"><img src="https://img.shields.io/badge/Version-v3.0-green.svg?style=for-the-badge" alt="版本" /></a>
    <a href="#"><img src="https://img.shields.io/badge/Compatible-v20.X%20|%20v26.2%20|%20v26.3-orange?style=for-the-badge" alt="兼容性" /></a>
  </p>
  
  <p><em>⭐ 如果这个项目对您有帮助，请给仓库点个 Star！⭐</em></p>
</div>

---

## 🔥 项目简介

一款现代、易用且设计精美的 Web 工具，用于生成激活密钥并自定义 **MobaXterm**——Windows 平台上终极的终端模拟器，内置 X11 服务器、SSH 客户端以及完整的网络工具集。

所有处理过程均 **100% 在浏览器本地**运行，最大限度地保障隐私与安全。

## ✨ 主要特性

- **💎 高级毛玻璃 UI** - 享受简洁、现代且完全响应式的使用体验。
- **🌓 自适应主题** - 暗色与亮色模式无缝切换。
- **🔒 多版本支持** - 轻松生成各种 MobaXterm 版本的许可证。
- **👥 灵活的用户配额** - 自定义并发用户数量上限。
- **💾 一键下载** - 即刻获取打包好的 `.mxtpro` 文件。
- **🔧 内置自定义工具集成** - 无需官方命令行工具，以可视化方式应用高级配置。
- **🖼️ 品牌个性化** - 轻松用您公司的标志替换 MobaXterm 的默认图标。
- **🔌 插件与书签** - 即时嵌入 `.mxt3` 插件和预定义的 SSH/FTP 配置。

## 🚀 兼容性

- 经大量测试，官方支持 MobaXterm **20.X、26.2 与 26.3** 版本。
- 同时兼容 **便携版（Portable）** 与 **安装版（Installer/Desktop）**。

## 📖 使用方法

### 1️⃣ 密钥生成器

1. **打开生成器**：访问 [MobaXterm 密钥生成器](https://mbxt.vercel.app/) Web 应用。
2. **设置许可证**：
   - 从下拉菜单中选择所需的 MobaXterm 版本。
   - 输入用户名（仅限字母字符）。
   - 输入目标版本号（例如 `26.3`）。
   - 设定所需的用户数量。
3. **生成**：点击 **"生成许可证"** 按钮，即可开始下载您的 `Custom.mxtpro` 密钥。
4. **部署**：将该文件放入 MobaXterm 的安装目录：
   ```text
   C:\Program Files (x86)\Mobatek\MobaXterm
   ```

### 2️⃣ 进阶：设置合并

如果您已有个性化的 MobaXterm 偏好设置（自定义工具调整、图标、bash 配置等）：

1. 在 Web 应用中切换到 **"文件合并"** 选项卡。
2. **导出您的设置**：运行 `.\MobaXterm.exe -customizer`，并选择导出为 `MobaXterm customization.custom`。
3. **上传两个文件**：
   - 许可证密钥文件（`Custom.mxtpro`）。
   - 导出的配置文件（`MobaXterm customization.custom`）。
4. 点击 **合并文件**，将所有内容注入到一个统一的 `Custom.mxtpro` 文件中，随后按常规方式部署即可。

## 🛠 故障排除

<details>
<summary><strong>激活未被识别？</strong></summary>
请确认您运行的是受支持的版本范围（v20.X、26.2 或 26.3）。同时，请确保文件严格命名为 `Custom.mxtpro`，不要出现 `Custom (1).mxtpro` 之类的重复命名。
</details>

<details>
<summary><strong>文件生成失败？</strong></summary>
请仔细检查您填写的用户名是否仅包含字母。由于底层加密校验的限制，目前不支持空格和特殊字符。
</details>

## 🧑‍💻 开发说明

本项目使用预编译的 [Tailwind CSS](https://tailwindcss.com/)（而非 CDN 运行时）以获得更快的加载速度。页面样式由 `tailwind.config.js` 与 `css/input.css` 构建。

修改页面样式后，运行以下命令重新生成 `css/tailwind.css`：

```bash
npm run build:css
```

> 首次使用前需先安装依赖：`npm install`

## 🔐 技术与安全说明

该工具完全在**客户端**运行，基于 `Vue.js` 与纯 DOM 操作。**您的任何数据或生成的许可证都不会发送到后端服务器。**

> **免责声明：** 本项目仅供教育理念与逆向工程学习研究之用。若用于商业环境，请考虑购买企业版许可证以支持官方开发者。

## 📈 版本历史

- **v3.0** - 采用全新重构的毛玻璃美学与现代化 UX 重新设计了界面。更新了对 `26.3` 的支持。
- **v2.7** - 新增对 26.0 版本的支持
- **v2.6** - 新增对 25.4 版本的支持
- **v2.5** - 新增对 25.3 版本的支持
- **v2.4** - 实现完整的 MobaXterm 自定义工具功能
- **v2.0** - 重大 UI 重构

---

<div align="center">
  <strong>由 Sundys 用 ❤️ 精心打造</strong><br>
  <a href="https://github.com/sundys/MBXT">⭐ 在 GitHub 上给我们点 Star</a>
</div>
