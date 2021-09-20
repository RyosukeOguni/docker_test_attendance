#nodeイメージをpullする
FROM node:latest

#working directory
WORKDIR /work

#vuecliインストール
RUN npm install

#shファイルをコンテナにコピー
COPY ./scripts/docker.start.sh /scripts/start.sh

#shフォルダの権限追加（全員実行可）
RUN chmod +x /scripts/*

#初期実行
# ENTRYPOINT [ "/scripts/start.sh" ]
