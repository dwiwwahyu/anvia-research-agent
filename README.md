# Anvia Research Agent

An AI-powered research agent built with **Anvia**, **Tavily**, and a Docker-based sandbox.

The agent can research a topic using web search, generate a structured research report, save the report to a Markdown file, and verify the generated file using sandbox tools.

## Features

- 🔎 Web search using Tavily
- 🤖 AI-powered research and summarization
- 📄 Generates a structured `report.md`
- ✍️ Writes files using Anvia Sandbox
- 📖 Reads generated files for verification
- 📁 Lists sandbox files to confirm successful output
- 🐳 Runs file operations inside an isolated Docker sandbox
- ⚡ Built with TypeScript

## Architecture

```text
User
 │
 ▼
Research Agent
 │
 ├── Web Search
 │      └── Tavily
 │
 └── Docker Sandbox
        ├── write_file
        ├── read_file
        └── list_files
 │
 ▼
Research Report
 │
 ▼
report.md