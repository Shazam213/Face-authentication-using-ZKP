# BlockChain Notes
## What is blockchain??
* List of records or blocks linked together using cryptography
* ![i1](assests/Screenshot%20from%202022-11-22%2012-30-25.png)
* Hash is like fingerprint of the data block
* First block is known as genesis block(wont have any prev hash)
* ![i2](assests/Screenshot%20from%202022-11-22%2012-33-12.png)

## Hash Cryptography( SHA256 Algorithm)
* ![i3](assests/Screenshot%20from%202022-11-22%2012-38-27.png)
* can be used for any type of document
* 5 requirements of HASH algorithm:
    1. One way: by fingerprints you cant determine how the person looks like likewise from just the hash you cant determine the entire document
    2. Deterministic: same document always should have same hash
    3. Fast computation
    4. Avalanche effect: if you even make a tiny change in the doucment the hash of the document will change
    5. Must withstand collision: by pigeon hole principle there are only limited combinations possible of the hash 64 characters but unlimited amounts of documents can be made then their might be possibility that two documents can have same hash. so the main point is that hackers can forge documents with same hash so it should be able to withstand that
    ![i4](assests/Screenshot%20from%202022-11-22%2012-48-42.png)
## Immutable ledger
* ![i5](assests/Screenshot%20from%202022-11-22%2012-53-09.png)
* As the time passes by it becomes more and more difficult to tamper with the data
* the places where physical ledgers are used can be replaced by blockchains

## Distributed P2P Network
* The data or blockchains is copied on many computers or laptops
* Whenever a new block is added in the official blockchain it is then copied on to all the peer devices
* The network is designed in such a way that it constantly check if the blockchains are the same on all the devices
* If any hacker changes all the links of a particular blockchain on a device the other devices on the network will let the devices know that the blockchain is hacked or changed and immediately restore the correct data onto the hacked device
* ![i6](assests/Screenshot%20from%202022-11-22%2013-04-49.png)
* ![i7](assests/Screenshot%20from%202022-11-22%2013-06-06.png)

## Mining
* ![i8](assests/Screenshot%20from%202022-11-22%2013-13-50.png)
* the nonce is the reason we need mining
* can manipulate hash value using the nonce
* by changing the nonce we can change the hash by avalanche effect
* Hash is a hexadecimal number
* All the hash numbers are arranged in a tabular format where the lower hashes are below and the higher hashes are at the top
* An arbritraty target is then set such that the hash should be within the target
* ![i9](assests/Screenshot%20from%202022-11-23%2000-50-46.png)
* By changing the nonce we can create such a hash such that it is below the target and then the block is added to the blockchain
* ![i10](assests/Screenshot%20from%202022-11-23%2000-55-40.png)
* So mining means nothing but to find the perfect nonce so that the hash is less than the target and the block can be added to the blockchain

## Byzantine Fault Tolerance
* ![i11](assests/Screenshot%20from%202022-11-23%2001-44-06.png)
* The algorithm basically tells that we need to make a final decision based on the majority of the the decision relayed between the systems
* In this examples of four soldiers if their are two traitors then the algorithm doesnt work so their must be max of 1/3 number of traitors for total number of generals
* Relating it to blockchain the traitor is the hacker who is trying to attack the system 
* The same concept is also used in many other systems like airplane where different components act as generals and if one of them fails then the entire system should not fail

## Consesus Protocol
* Challenges faced by BFT in blockchain is attackers adding new block at end of blockchain and competing chains as there can be lag between two different chains on different devices and there might be possibility that two different chains can mine the blocks at the same time
* ![i12](assests/Screenshot%20from%202022-11-23%2002-01-27.png)
* Types of consesus protocol:
* ![i13](assests/Screenshot%20from%202022-11-23%2002-01-55.png)
* POW is used by bitcoin and ethereum(currently)
* Miners get certain 12.5 bitcoins for every block mined as a reward and some more bitcoin as mentioned in the data of the block
* For the system to know if the block added is malaious or fare every single node conducts a rigorous series of checks, if check doesnt go through the block gets rejected.
* Cryptographic puzzles: Hard to solve, easy to verify
* If two different chains find the same block then after relaying the new block in their respective neighbours there will be a confusion in the network as to which block to add next
* the consesus protocol stated that wait till a new block is added and the group of chain the new block is added wins as the longest chain is the king
* ![i14](assests/Screenshot%20from%202022-11-23%2002-15-02.png)
* ![i15](assests/Screenshot%20from%202022-11-23%2002-15-18.png)
* ![i16](assests/Screenshot%20from%202022-11-23%2002-16-05.png)
* The block removed is known as orphaned block and the reward is not granted as the orphaned block never gets added into the blockchain