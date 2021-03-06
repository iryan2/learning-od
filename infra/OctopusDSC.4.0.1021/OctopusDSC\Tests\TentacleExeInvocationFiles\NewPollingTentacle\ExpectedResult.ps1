return @(
  "create-instance --instance Tentacle --config C:\Octopus\Tentacle\Tentacle.config --console",
  "new-certificate --instance Tentacle --console",
  "configure --instance Tentacle --home C:\Octopus --app C:\Applications --console --noListen True",
  "service --install --instance Tentacle --console --reconfigure --username Admin --password S3cur3P4ssphraseHere!",
  "register-with --instance Tentacle --server http://localhost:81 --name My Tentacle --apiKey API-1234 --force --console --comms-style TentacleActive --server-comms-port 10943 --environment dev --environment prod --role web-server"
)
