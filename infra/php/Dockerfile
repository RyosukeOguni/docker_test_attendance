# イメージビルドのベースイメージを設定
# php(イメージ名):8.0-fpm-buster(タグ名)
# 8.0(ver.)-fpm(PHPのみを実行するサーバー)-buster(用意されるコンテナOS:Debian10)
FROM php:8.0-fpm-buster

# SHELLは必須ではないオプション
SHELL ["/bin/bash", "-oeux", "pipefail", "-c"]

# コンテナ内のサーバー環境変数を設定
ENV COMPOSER_ALLOW_SUPERUSER=1 \
  COMPOSER_HOME=/composer

# コンテナにcomposer2.0をインストール
COPY --from=composer:2.0 /usr/bin/composer /usr/bin/composer

# Linuxコマンドで処理を実行
RUN apt-get update && \
  apt-get -y install git unzip libzip-dev libicu-dev libonig-dev && \
  apt-get clean && \
  rm -rf /var/lib/apt/lists/* && \
  docker-php-ext-install intl pdo_mysql zip bcmath

# ローカルのphp設定ファイルを、インストールされたphpにコピー
COPY ./php.ini /usr/local/etc/php/php.ini

# phpの実行をworkディレクトリ内に限定
WORKDIR /work
