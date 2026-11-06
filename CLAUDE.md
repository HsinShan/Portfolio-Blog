## graphify

This project has a knowledge graph at graphify-out/ with god nodes, community structure, and cross-file relationships.

Rules:
- For codebase questions, first run `graphify query "<question>"` when graphify-out/graph.json exists. Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"` for focused concepts. These return a scoped subgraph, usually much smaller than GRAPH_REPORT.md or raw grep output.
- If graphify-out/wiki/index.md exists, use it for broad navigation instead of raw source browsing.
- Read graphify-out/GRAPH_REPORT.md only for broad architecture review or when query/path/explain do not surface enough context.
- After modifying code, run `graphify update .` to keep the graph current (AST-only, no API cost).

## 專案結構

- `src/content/`：網站上所有文字與數字（經歷、技能、作品卡、介面文字）。改內容只改這裡，不要在元件裡寫死文字
- `src/components/`：只負責排版，從 `content/` 讀資料
- 履歷數字的來源在 Notion「💻 履歷產出」的「初版履歷 v1」數字來源表；網站上的數字要對得回去，不自己新增

## Commit 前的 review（輕量版，沒有 hook，靠這份規則）

1. 改完先在本機 `npm start` 看過畫面，console 不能有 React / antd 警告
2. 跑 `graphify update .`，確認沒有 syntax error 的檔案
3. 跑 `/code-review`（範圍：目前 diff）
4. **停止標準**：只修正確性錯誤和畫面看得到的問題；潛在問題、整理性質的寫進 `.claude/backlog.md`，不要一輪一輪追
5. 修一個問題前，先搜同一個成因還出現在哪，一次修完
6. 給 Shirley 看 diff 與截圖，她同意才 commit；不 push、不部署
7. Commit message：英文、`<type>: <imperative>`，body 寫「為什麼」，用 `git commit -F <檔案>`，結尾 `Co-Authored-By:` 用實際模型
