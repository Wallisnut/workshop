FROM mcr.microsoft.com/mssql/server:2019-latest

ENV ACCEPT_EULA=Y

ENV SA_PASSWORD=cs261@tu

ENV MSSQL_PID=Express

EXPOSE 1433
