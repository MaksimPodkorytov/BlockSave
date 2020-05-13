cargo install --force --path .

rm -R /tmp/example
mkdir /tmp/example
pipes_marking generate-template /tmp/example/common.toml --validators-count 4

pipes_marking generate-config /tmp/example/common.toml  /tmp/example/1 --peer-address 127.0.0.1:6331 -n
pipes_marking generate-config /tmp/example/common.toml  /tmp/example/2 --peer-address 127.0.0.1:6332 -n
pipes_marking generate-config /tmp/example/common.toml  /tmp/example/3 --peer-address 127.0.0.1:6333 -n
pipes_marking generate-config /tmp/example/common.toml  /tmp/example/4 --peer-address 127.0.0.1:6334 -n

pipes_marking finalize --public-api-address 0.0.0.0:8200 --private-api-address 0.0.0.0:8091 /tmp/example/1/sec.toml /tmp/example/node1.toml --public-configs /tmp/example/1/pub.toml /tmp/example/2/pub.toml /tmp/example/3/pub.toml /tmp/example/4/pub.toml
pipes_marking finalize --public-api-address 0.0.0.0:8201 --private-api-address 0.0.0.0:8092 /tmp/example/2/sec.toml /tmp/example/node2.toml --public-configs /tmp/example/1/pub.toml /tmp/example/2/pub.toml /tmp/example/3/pub.toml /tmp/example/4/pub.toml
pipes_marking finalize --public-api-address 0.0.0.0:8202 --private-api-address 0.0.0.0:8093 /tmp/example/3/sec.toml /tmp/example/node3.toml --public-configs /tmp/example/1/pub.toml /tmp/example/2/pub.toml /tmp/example/3/pub.toml /tmp/example/4/pub.toml
pipes_marking finalize --public-api-address 0.0.0.0:8203 --private-api-address 0.0.0.0:8094 /tmp/example/4/sec.toml /tmp/example/node4.toml --public-configs /tmp/example/1/pub.toml /tmp/example/2/pub.toml /tmp/example/3/pub.toml /tmp/example/4/pub.toml


nohup pipes_marking run --node-config /tmp/example/node1.toml --db-path /tmp/example/1/db --public-api-address 0.0.0.0:8200 --consensus-key-pass pass --service-key-pass pass &
nohup pipes_marking run --node-config /tmp/example/node2.toml --db-path /tmp/example/2/db --public-api-address 0.0.0.0:8201 --consensus-key-pass pass --service-key-pass pass &
nohup pipes_marking run --node-config /tmp/example/node3.toml --db-path /tmp/example/3/db --public-api-address 0.0.0.0:8202 --consensus-key-pass pass --service-key-pass pass &
nohup pipes_marking run --node-config /tmp/example/node4.toml --db-path /tmp/example/4/db --public-api-address 0.0.0.0:8203 --consensus-key-pass pass --service-key-pass pass
