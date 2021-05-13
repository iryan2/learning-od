return @(
    "create-instance --instance Tentacle --config C:\Octopus\Tentacle\Tentacle.config --console",
    "new-certificate --instance Tentacle --console",
    "configure --instance Tentacle --home C:\Octopus --app C:\Applications --console --port 10935",
    "service --install --instance Tentacle --console --reconfigure --username Admin --password S3cur3P4ssphraseHere!",
    "register-worker --instance Tentacle --server http://localhost:81 --name My Worker --force --apiKey API-1234 --comms-style TentaclePassive --publicHostName mytestserver.local --policy My machine policy --workerpool NodeJSWorker"
)
