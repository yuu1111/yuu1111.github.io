# Overdungeon インストール構成調査レポート

**調査日**: 2024-12-14
**Steam App ID**: 919370
**開発元**: Pocketpair

---

## 概要

Overdungeonのインストールフォルダに不要なファイルが大量に含まれていることが判明。
**約2GB（インストールサイズの65%）が不要ファイル**だった。

---

## 調査結果

### 公式配布のファイル構成

| フォルダ/ファイル | サイズ | 状況 |
|------------------|--------|------|
| `Windows-64bit.exe` | 0.6MB | ✅ 必須（公式起動ファイル） |
| `Windows-64bit_Data/` | 1.2GB | ✅ 必須（本体データ） |
| `GameAssembly.dll` | 44MB | ✅ 必須 |
| `UnityPlayer.dll` | 29MB | ✅ 必須 |
| `baselib.dll` | 0.4MB | ✅ 必須 |
| `UnityCrashHandler64.exe` | 1.1MB | ✅ 必須 |
| `Overdungeon.exe` | 0.6MB | ❌ 旧構成（不要） |
| `Overdungeon_Data/` | 921MB | ❌ 旧構成（不要） |
| `Overdungeon_BackUpThisFolder_ButDontShipItWithYourGame/` | 551MB | ❌ 開発用（不要） |
| `Windows-64bit_BackUpThisFolder_ButDontShipItWithYourGame/` | 598MB | ❌ 開発用（不要） |

### 不要ファイル合計

```
Overdungeon_Data/                                           921MB
Overdungeon_BackUpThisFolder_ButDontShipItWithYourGame/     551MB
Windows-64bit_BackUpThisFolder_ButDontShipItWithYourGame/   598MB
Overdungeon.exe                                             0.6MB
────────────────────────────────────────────────────────────────
合計                                                       約2.07GB
```

---

## 技術的詳細

### Steam起動設定（SteamDB確認済み）

| Option | 実行ファイル | OS | デフォルト |
|--------|------------|-----|---------|
| 0 | OSX.app | macOS | - |
| 1 | **Windows-64bit.exe** | Windows 64bit | ✅ |
| 2 | Windows-32bit.exe | Windows 32bit | - |

**公式のデフォルト起動ファイルは `Windows-64bit.exe`**
`Overdungeon.exe` はSteamの起動設定に存在しない。

### ビルド情報の違い

| 項目 | Overdungeon_Data | Windows-64bit_Data |
|------|------------------|-------------------|
| Build GUID | `67fc03e5...` | `fe44f470...` |
| global-metadata.dat | 10.9MB | 11.5MB |
| Unity Mediation (広告SDK) | なし | あり |
| Render Pipelines | なし | あり |

### 重複ファイル

以下のファイルは両方のDataフォルダで完全に同一（MD5ハッシュ一致）：
- 全ての `level*.resS` ファイル（25ファイル）
- `NatCorder.dll`, `steam_api64.dll`
- 多数の `sharedassets*.resS` ファイル

---

## 経緯（SteamDB履歴より）

| 日付 | 変更内容 |
|------|----------|
| 2023-05-20以前 | `Overdungeon.exe` + `Overdungeon_Data` のみ。既にBackUpフォルダが混入 |
| 2023-08-26 | `Windows-64bit_BackUpThisFolder_...` が追加。約300MB増加 |
| 2023-09-05 | 最終アップデート。両構成が並存したまま |

---

## 問題点

### 1. Unity警告の無視
`_BackUpThisFolder_ButDontShipItWithYourGame` というフォルダ名自体が「出荷するな」というUnityの警告。
これを無視して配信している。

### 2. 旧構成の放置
`Windows-64bit.exe` への移行後も `Overdungeon.exe` + `Overdungeon_Data` を削除していない。

### 3. 容量の無駄
ユーザーのディスク容量を約2GB無駄に消費している。

---

## 推奨アクション

### ユーザー向け

1. ゲームを起動し、タスクマネージャーで `Windows-64bit.exe` が動作することを確認
2. 以下のフォルダ/ファイルを削除可能（バックアップ推奨）：
   - `Overdungeon.exe`
   - `Overdungeon_Data/`
   - `Overdungeon_BackUpThisFolder_ButDontShipItWithYourGame/`
   - `Windows-64bit_BackUpThisFolder_ButDontShipItWithYourGame/`
3. 削除後、Steamの「ゲームファイルの整合性を確認」は実行しないこと（復元されるため）

### 開発者（Pocketpair）向け

次回アップデートで以下を削除すべき：
- 旧構成（Overdungeon.exe + Overdungeon_Data）
- 両方のBackUpフォルダ

---

## 参考リンク

- [SteamDB - Overdungeon](https://steamdb.info/app/919370/)
- [SteamDB - Depot 919372](https://steamdb.info/depot/919372/)
- [SteamDB - Configuration](https://steamdb.info/app/919370/config/)

---

*本レポートはローカル調査およびSteamDB調査に基づく*
