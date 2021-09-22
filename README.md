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
<ul>
  <li>
    <dl>
      <dt><a href="https://packagist.org/packages/laravel/framework">laravel/framework v8.55.0</a></dt>
      <dd>laravelフレームワーク</dd>
    </dl>
  </li>
  <li>
    <dl>
      <dt><a href="https://packagist.org/packages/laravel/sanctum">laravel/sanctum v2.11.2</a></dt>
      <dd>SPA認証に使用</dd>
    </dl>
  </li>
  <li>
    <dl>
      <dt><a href="https://packagist.org/packages/nesbot/carbon">nesbot/carbon　2.51.1</a></dt>
      <dd>PHPサーバー内で日付や時間を処理</dd>
    </dl>
  </li>
  <li>
    <dl>
      <dt><a href="https://packagist.org/packages/phpoffice/phpspreadsheet">phpoffice/phpspreadsheet 1.18.0</a></dt>
      <dd>出欠記録をExcelファイルに出力</dd>
    </dl>
  </li>
  <li>
    <dl>
      <dt><a href="https://packagist.org/packages/madnest/madzipper">madnest/madzipper v1.1.0</a></dt>
      <dd>複数のExcelファイルをZip圧縮</dd>
    </dl>
  </li>
  <li>
    <dl>
      <dt><a href="https://packagist.org/packages/mnabialek/laravel-sql-logger">mnabialek/laravel-sql-logger 2.2.8</a></dt>
      <dd>クエリログを記録</dd>
    </dl>
  </li>
</ul>
</details>

<details>
<summary><b>フロントエンドエンド（Vue.js）</b></summary>
<ul>
<li>
  <dl>
    <dt><a href="https://www.npmjs.com/package/vue">vue@2.6.14</a></dt>
    <dd>Vue.jsフレームワーク</dd>
  </dl>
</li>
<li>
  <dl>
    <dt><a href="https://www.npmjs.com/package/vue-router">vue-router@3.5.2</a></dt>
    <dd>シングルページアプリケーション機能の導入</dd>
  </dl>
</li>
<li>
  <dl>
    <dt><a href="https://www.npmjs.com/package/vuex">vuex@3.6.2</a></dt>
    <dd>リアクティブデータの状態管理</dd>
  </dl>
</li>
<li>
  <dl>
    <dt><a href="https://www.npmjs.com/package/axios">axios@0.21.1</a></dt>
    <dd>非同期通信</dd>
  </dl>
</li>
<li>
  <dl>
    <dt><a href="https://www.npmjs.com/package/vuetify">vuetify@2.5.8</a></dt>
    <dd>UIフレームワーク</dd>
  </dl>
</li>
</ul>
</details>

## ３．導入手順

docker-composeの起動
```
docker-compose up -d --build
```
backendコンテナへアクセス
```
docker-compose exec backend bash
```
composerをインストール
```
composer install
```
アプリケーションキーを設定
```
php artisan key:generate
```
laravel.logを記録するディレクトリに書込権限を付与
```
chmod 777 -R storage/
```
マイグレーションを実行
```
php artisan migrate --seed
```
frontendコンテナへアクセス
```
docker-compose exec frontend bash
```
npmをインストール
```
npm install
```
buildしてdistを作成
```
npm run dev-build
```

- [backend_API：http://localhost:8080/](http://localhost:8080/)
- [frontend_SPA：http://localhost:8081/](http://localhost:8081/)
- [phpmyadmin：http://localhost:8082/](http://localhost:8082/)

## ４．作成者情報

- 作成者：小国 亮介
