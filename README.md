# 出欠管理システム

利用者情報、出欠記録を管理するWEBアプリケーション。<br>
SPA認証機能により、利用者が操作する打刻画面、管理者が操作する管理画面<br>
出欠記録をExcel形式の提出用書式ファイルに出力可能。

## １．設計資料

- [画面設計](https://drive.google.com/file/d/1SnSZXtZI_RW8MyoaQKi-5kJRKxoi9kHA/view?usp=sharing)
- [DB設計](https://docs.google.com/spreadsheets/d/17RrS2w2tT9tho0lYT3gNw_mgJa9HsXAvaGf-L8HB3-M/edit?usp=sharing)
- [ER図](https://drive.google.com/file/d/1kQ1C5ky3_muGoZtLrMPVJ_NGWB79cnLf/view?usp=sharing)
- [APIエンドポイント設計](https://docs.google.com/document/d/1TJakUUqc22AOlnHskWc17qnKZRHTCMaJfrcxrMjBXKs/edit?usp=sharing)
- [APIレスポンス応答例](https://docs.google.com/document/d/1aAdXZJJfrltc-fAh2bo95gssix-HP8EqhrV0sxHJ050/edit?usp=sharing)
- [ユースケース図](https://drive.google.com/file/d/1Bx9gb8y7wBuTnkhYb5jkV36CA5oOfKSH/view?usp=sharing)

## ２．使用パッケージ・ライブラリ



<details>
<summary><b>バックエンド（Laravel）</b></summary>
<br>

- [laravel/framework v8.55.0](https://packagist.org/packages/laravel/framework)
  - laravelフレームワーク
- [laravel/sanctum v2.11.2](https://packagist.org/packages/laravel/sanctum)
  - SPA認証に使用
- [nesbot/carbon　2.51.1](https://packagist.org/packages/nesbot/carbon)
  - PHPサーバー内で日付や時間を処理
- [phpoffice/phpspreadsheet 1.18.0](https://packagist.org/packages/phpoffice/phpspreadsheet)
  - 出欠記録をExcelファイルに出力
- [madnest/madzipper v1.1.0](https://packagist.org/packages/madnest/madzipper)
  - 複数のExcelファイルをZip圧縮
- [mnabialek/laravel-sql-logger 2.2.8](https://packagist.org/packages/mnabialek/laravel-sql-logger)
  - クエリログを記録
___
</details>

<details>
<summary><b>フロントエンド（Vue.js）</b></summary>
<br>

- [vue@2.6.14](https://www.npmjs.com/package/vue)
  - Vue.jsフレームワーク
- [vue-router@3.5.2](https://www.npmjs.com/package/vue-router)
  - シングルページアプリケーション機能の導入
- [vuex@3.6.2](https://www.npmjs.com/package/vuex)
  - リアクティブデータの状態管理
- [axios@0.21.1](https://www.npmjs.com/package/axios)
  - 非同期通信
- [vuetify@2.5.8](https://www.npmjs.com/package/vuetify)
  - UIフレームワーク
___
</details>

## ３．Docker環境構築
#### 必要環境
- docker
- docker-compose
#### Docker構成
| コンテナ名 | image | URL |
----|----|----
| backend | php:8.0-fpm-buster | [http://localhost:8080/](http://localhost:8080/) |
| frontend | node:latest | [http://localhost:8081/](http://localhost:8081/) |
| phpmyadmin | phpmyadmin/phpmyadmin | [http://localhost:8082/](http://localhost:8082/) |
| web | nginx:latest ||
| db | mysql/mysql-server:8.0 ||

#### システム導入手順
<details>
<summary><b>システムDLとDockerコンテナの起動</b></summary>
<br>

１.Git hubからシステムをダウンロード
```
git clone https://github.com/RyosukeOguni/attendance_system
```
２.ディレクトリを移動
```
cd attendance_system
```
３.docker-composeの起動
```
docker-compose up -d --build
```
___
</details>

<details>
<summary><b>バックエンド（Laravel）の設定</b></summary>
<br>

１.backendコンテナへアクセス
```
docker-compose exec backend bash
```
２.composerをインストール
```
composer install
```
３.環境変数ファイルをコピーしてリネーム
```
cp backend/.env.example backend/.env
```
４.アプリケーションキーを設定
```
php artisan key:generate
```
５.laravel.logを記録するディレクトリに書込権限を付与
```
chmod 777 -R storage/
```
６.マイグレーションを実行
```
php artisan migrate --seed
```
___
</details>

<details>
<summary><b>フロントエンド（Vue.js）の設定</b></summary>

１.frontendコンテナへアクセス
```
docker-compose exec frontend bash
```
２.npmをインストール
```
npm install
```
３.環境変数ファイルをコピーしてリネーム
```
cp frontend/.env.production frontend/.env.local
```
４.buildしてdistを作成
```
npm run dev-build
```
___
</details>

## ４．作成者情報

- 作成者：小国 亮介
