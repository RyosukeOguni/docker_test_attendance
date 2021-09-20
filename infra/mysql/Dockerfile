FROM mysql/mysql-server:8.0

ENV MYSQL_DATABASE=attendance_api \
  MYSQL_USER=test \
  MYSQL_PASSWORD=12345678 \
  MYSQL_ROOT_PASSWORD=12345678 \
  TZ=Asia/Tokyo

COPY ./my.cnf /etc/my.cnf
RUN chmod 644 /etc/my.cnf
