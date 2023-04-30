import spur

shell = spur.SshShell(
		hostname="45.12.238.25",
		port=22,
		username="root",
		password="WXJOl&X1FEPl",
		missing_host_key=spur.ssh.MissingHostKey.accept)
result = shell.run([
	"sh",
	"-c", 
	"cd  ../../var/www/back/target; sudo kill -9 $(sudo lsof -t -i:8085); screen -m -d java -jar ClientWeb-0.0.1-SNAPSHOT.jar --spring.config.name=application-dev; sudo service nginx restart; "])

print("Restart serveris done")
