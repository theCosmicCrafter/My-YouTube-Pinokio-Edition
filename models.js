module.exports = [
  {
    name: "DeepSeek",
    models: [
      { id: "deepseek-r1:1.5b", size: "1.1GB" },
      { id: "deepseek-r1:7b", size: "4.7GB" },
      { id: "deepseek-r1:8b", size: "4.9GB" },
      { id: "deepseek-r1:14b", size: "9.0GB" },
      { id: "deepseek-r1:32b", size: "20GB" },
      { id: "deepseek-r1:70b", size: "43GB" }
    ]
  },
  {
    name: "Llama",
    models: [
      { id: "llama3.2:1b", size: "1.3GB" },
      { id: "llama3.2:3b", size: "2.0GB" },
      { id: "llama3.1:8b", size: "4.7GB" },
      { id: "llama3.3:70b", size: "43GB" }
    ]
  },
  {
    name: "Qwen",
    models: [
      { id: "qwen2.5:0.5b", size: "397MB" },
      { id: "qwen2.5:1.5b", size: "986MB" },
      { id: "qwen2.5:3b", size: "1.9GB" },
      { id: "qwen2.5:7b", size: "4.7GB" },
      { id: "qwen2.5:14b", size: "9.0GB" },
      { id: "qwen2.5:32b", size: "20GB" }
    ]
  },
  {
    name: "Mistral",
    models: [
      { id: "mistral:7b", size: "4.1GB" },
      { id: "mistral-small:22b", size: "13GB" }
    ]
  },
  {
    name: "Gemma",
    models: [
      { id: "gemma2:2b", size: "1.6GB" },
      { id: "gemma2:9b", size: "5.5GB" },
      { id: "gemma2:27b", size: "16GB" }
    ]
  },
  {
    name: "Phi",
    models: [
      { id: "phi4:14b", size: "9.1GB" },
      { id: "phi3:3.8b", size: "2.2GB" }
    ]
  }
]
