# 使用官方的MongoDB镜像作为基础镜像
FROM mongo

# 设置MongoDB的环境变量（如果需要的话）
# ENV MONGO_INITDB_ROOT_USERNAME=admin
# ENV MONGO_INITDB_ROOT_PASSWORD=password

# 将MongoDB的数据目录设置为卷，这样数据就可以持久化存储在宿主机上
VOLUME /data/db

# MongoDB的默认端口
EXPOSE 27017

# 启动MongoDB服务
CMD ["mongod"]