FROM mysql/mysql-server:8.0

ENV MYSQL_DATABASE=attendance_api \
  MYSQL_USER=orkney092 \
  MYSQL_PASSWORD=r80921980o \
  MYSQL_ROOT_PASSWORD=r80921980o \
  TZ=Asia/Tokyo

COPY ./my.cnf /etc/my.cnf
RUN chmod 644 /etc/my.cnf
