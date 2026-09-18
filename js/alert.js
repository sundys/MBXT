const asciiArt = `
 @@@@@@@@   @@@@@@   @@@@@@@   @@@@@@@@   @@@@@@   @@@        @@@@@@ 
 @@@@@@@@  @@@@@@@@  @@@@@@@@  @@@@@@@@  @@@@@@@@  @@@       @@@@@@@@
      @@!  @@!  @@@  @@!  @@@  @@!       @@!  @@@  @@!       @@!  @@@
     !@!   !@!  @!@  !@!  @!@  !@!       !@!  @!@  !@!       !@!  @!@
    @!!    @!@!@!@!  @!@!!@!   @!!!:!    @!@!@!@!  @!!       @!@!@!@!
   !!!     !!!@!!!!  !!@!@!    !!!!!:    !!!@!!!!  !!!       !!!@!!!!
  !!:      !!:  !!!  !!: :!!   !!:       !!:  !!!  !!:       !!:  !!!
 :!:       :!:  !:!  :!:  !:!  :!:       :!:  !:!   :!:      :!:  !:!
  :: ::::  ::   :::  ::   :::   ::       ::   :::   :: ::::  ::   :::
 : :: : :   :   : :   :   : :   :         :   : :  : :: : :   :   : :
`;

const asciiAuraStyle = `
  font-family: "Courier New", monospace;
  font-weight: 900;
  background: linear-gradient(90deg, #60a5fa, #ec4899, #8b5cf6);
  -webkit-background-clip: text;
  color: transparent;
  display: block;
  white-space: pre;
`;

const warningHeadingStyle = `
  color: #ff0055;
  font-size: 44px;
  font-weight: 900;
  font-family: 'Outfit', sans-serif, system-ui;
  text-shadow: 0px 4px 15px rgba(255, 0, 85, 0.4);
  padding: 10px 0;
`;

const warningBodyStyle = `
  font-size: 16px;
  color: #d1d5db;
  font-weight: 500;
  line-height: 1.6;
  font-family: system-ui, -apple-system, sans-serif;
  padding: 10px 0 20px 0;
`;

const signatureStyle = `
  font-size: 14px;
  font-weight: bold;
  background: linear-gradient(90deg, #10b981, #3b82f6);
  -webkit-background-clip: text;
  color: transparent;
  font-family: 'Outfit', sans-serif;
`;

function renderSecureAura() {
  // Clear any existing logs to present a clean canvas
  console.clear();

  // Print Aura-style ASCII Art
  console.log('%c' + asciiArt, asciiAuraStyle);

  // Print Warning Message
  console.log("%c停止！安全区域", warningHeadingStyle);

  console.log(
    "%c这是专为开发者提供的浏览器功能。\n请勿输入或粘贴任何您不完全理解的代码。\n这样做可能会让攻击者劫持您的会话、窃取您的许可证或冒充您的身份。\n\n请保护您的数据，注意安全！🔒",
    warningBodyStyle
  );

  console.log("%c✨ MobaXterm 密钥生成系统 - 防护已启用", signatureStyle);
}

// Render the protective aura once
renderSecureAura();
