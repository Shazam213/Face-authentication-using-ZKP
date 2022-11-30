# Blockchain
## Blockchain Intuition

![img](https://scontent.xx.fbcdn.net/v/t1.15752-9/315217198_639443827863092_2711302344550052622_n.png?stp=dst-png_p206x206&_nc_cat=104&ccb=1-7&_nc_sid=aee45a&_nc_ohc=j6JimvUNWWsAX-1GIQM&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQew0DEObglvQPF_QCmphqm_SjwMSWQzRrAHEfdiMHSxA&oe=639BF104)

![img](https://scontent.xx.fbcdn.net/v/t1.15752-9/315525094_832747904644404_8892861448878354741_n.png?stp=dst-png_p206x206&_nc_cat=102&ccb=1-7&_nc_sid=aee45a&_nc_ohc=PCp1TxftFRQAX_SihsD&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTtK3o4OmKeR5f2FAaNaH_HvZN9rkIkKtyBbB6ziMuZWA&oe=639BE6ED)

if data of one block changes, its hash changes and the blocks are no longer linked together. Hash is like a blockchains fingerprint.

## SHA256 Hash

64 characters long 
0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f

![img](https://scontent.xx.fbcdn.net/v/t1.15752-9/315515224_804414220811398_3421660607156049966_n.png?stp=dst-png_p206x206&_nc_cat=107&ccb=1-7&_nc_sid=aee45a&_nc_ohc=o_nWRmNmNvwAX8ajx8B&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTxqWIztP3Yrmw1G2YW4PZJLL6Z_QoqGyxFUuVACWpqJA&oe=639BDC56)

one-way : cannot generate data from hash but can generate hash from data
Deterministic : Same data must produce same hash
Fast computation
The avalanche effect : Small change in data leads to the generation of a entirely new hash
Collisions: In rare casses, some widely different types of data may have an exactly same hash!

## Immutable Ledger

If anyone tampers with data in a block, the hash will be changed and hence the chain will be broken as the next block will no longer have the same prev hash.
Hence one will have to change the data of all the proceeding blocks which is quite tedious compared to what he will have to do in case the data files were not linked by a blockchain.

## Distributed P2P Network

![img](https://scontent.xx.fbcdn.net/v/t1.15752-9/311298028_861899421913849_6506764770127429477_n.png?stp=dst-png_p206x206&_nc_cat=100&ccb=1-7&_nc_sid=aee45a&_nc_ohc=Nl-jpif2zaUAX-24vUM&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSfYugZRJQMztDqIiHplj_h5mZToxKAnGZZ4Q1uUOBK1Q&oe=639BDA75)

Now if a hacker tries to change the data of all the blocks preceeding the interested block to avoid detection or if by mistake the data is changed by the programmer , the peer computers will automatically detect that there is a malicious activity in one of the servers and will restore it back to normal immediately. 

Only way to contour this will be changing the data in more than 50 percent of the connected pc at the same time.

## Mining 

![img](https://scontent-bom1-1.xx.fbcdn.net/v/t1.15752-9/312235835_1447017105788706_6215669729567538302_n.png?_nc_cat=102&ccb=1-7&_nc_sid=ae9488&_nc_ohc=4kRqdir1TiAAX9Ntds3&_nc_ht=scontent-bom1-1.xx&oh=03_AdSWMdSmZgEQsSevLPcweZQIR1bxrOzS06xcF7oSKMi2LA&oe=639BE038)

Here we introduced an extra variable called nonce changing which changes the hash.

![img](https://scontent.xx.fbcdn.net/v/t1.15752-9/315526544_550932406810562_5123573048039285014_n.png?stp=dst-png_p206x206&_nc_cat=111&ccb=1-7&_nc_sid=aee45a&_nc_ohc=DffJXHvZFWoAX_oF_RM&_nc_oc=AQnY9k2FvaS1KviyICpSEo80hm1BlN54yZc03uyfyRqCLRbW8q1hJtP2UQYuNE7Pmw_dx9QV2f0TcUO9b-zEQsIR&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQydspHQGYrW5IgATSKNWbsoJW0hOZZ3yI0fnZrsJLyRg&oe=639C08AD)

Miners task here is to repeatedly change the nonce so that they get a hash below or smaller than the target hash. This nonce is the golden nonce.

[wapis dekhle](https://drive.google.com/drive/folders/11MxmqNC63MeruE4h2q0cPU3omz4gs6vB)

## Byzantine Fault Tolerance

![img](https://scontent.xx.fbcdn.net/v/t1.15752-9/315112594_480257787445647_9145931983138028423_n.png?stp=dst-png_p206x206&_nc_cat=103&ccb=1-7&_nc_sid=aee45a&_nc_ohc=qGwmUGupc5EAX_7g29a&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdT6DBu-WqI7HRH_6XSk6KCNYmBi0Wo3t5pBOuzj1EcbcA&oe=639C17D0)

Here if the general gives a command and one of the knights is a traitor , the genrals command is followed.

![img](https://scontent.xx.fbcdn.net/v/t1.15752-9/315501611_644984407107806_8807039846283991803_n.png?stp=dst-png_p206x206&_nc_cat=107&ccb=1-7&_nc_sid=aee45a&_nc_ohc=qJjwel7tYqIAX-wu9IA&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTIyhehp-5T2VLeh0Se0OHh8JuWNFDzbViUI0N3aYGFwg&oe=639C0917)

If the general is the traitor then the command which he sends to two people is executed.

If more than 1/3rd the total number of knights are traitors, this algorithm fails.

## Consensous Protocol

challenge 1 : Attackers
challenge 2 : Competing chains (Due to time lag in transmission, Two different nodes generate a block at the same time)

![img](https://scontent.xx.fbcdn.net/v/t1.15752-9/315520224_2110676382448907_6587569647130814652_n.png?stp=dst-png_p206x206&_nc_cat=104&ccb=1-7&_nc_sid=aee45a&_nc_ohc=rEDVc_C1GE4AX_hUf_f&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRX5MdvEoUvd0g0Tw3Z3SeY4R8LWa_HitKR5thuVMtUpw&oe=639C2BA7)

The Hash that miners generate from the golden Nonce is the proof of work.

![img](https://scontent.xx.fbcdn.net/v/t1.15752-9/315527916_1239561670247307_2478910232349456694_n.png?stp=dst-png_p206x206&_nc_cat=104&ccb=1-7&_nc_sid=aee45a&_nc_ohc=v6XNtF6Uxd0AX-InzWZ&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTp5ZW0jB8MPPOsFXX6eEgA8lbZ0e3JiEqj8WMkYgfMnw&oe=639C30E3)

Every single node produces a series of check (for the block  being added).

This check include:
![img](https://scontent.xx.fbcdn.net/v/t1.15752-9/315963077_504829908352058_5745983918793935839_n.png?stp=dst-png_s206x206&_nc_cat=111&ccb=1-7&_nc_sid=aee45a&_nc_ohc=V8KKaiURgtYAX-OlpE1&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdT-FqiLCnLNpq1ZHrlUw8Eab6J5wjcrbW54MKtz8vMgOg&oe=639C3725)

Miners are paid for there work and also rewarded if thier vlock is authorised.

A issue like this is very similar to the Byzantine Fault Tolerance problem:
![img](https://scontent.xx.fbcdn.net/v/t1.15752-9/312986353_1032634164803674_8962062867613159601_n.png?stp=dst-png_p206x206&_nc_cat=100&ccb=1-7&_nc_sid=aee45a&_nc_ohc=ewt7lDcAdDwAX9d3Pw_&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdST8b1GfaWrRbUV8oRGxVAtCu0OxHZRSHjO3wzP2YlXdA&oe=639C31BF)

In casses like these, we now check for the next block to be added. In case the orange chain adds a new block, we discard the purple block. Else we discard the orange block.

Generally the node with higher Hash power wins.

(Hash rate is a measure of the computational power on a blockchain network. Hash rate is determined by how many guesses are made per second. The overall hash rate helps determine the security and mining difficulty of a blockchain network)
(The computational capability in a machine that is used for crypto mining. Hash power may also refer to the total computing power of a miner or mining pool)

A issue like this is very similar to the Byzantine Fault Tolerance problem:
![img](https://scontent.xx.fbcdn.net/v/t1.15752-9/315301019_839772423933469_2920081419935770536_n.png?stp=dst-png_p206x206&_nc_cat=101&ccb=1-7&_nc_sid=aee45a&_nc_ohc=m1W0KJTKuEIAX_gThSN&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRn3ZxhWGCEr08flmy2q-PvluUbPGkkC0pTNMPuT6YmWg&oe=639C14FC)

![img](https://scontent.xx.fbcdn.net/v/t1.15752-9/315527853_608348294398104_7757956472158408121_n.png?stp=dst-png_p206x206&_nc_cat=100&ccb=1-7&_nc_sid=aee45a&_nc_ohc=e5dg5q-OjCQAX8CTtO7&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRDIGOoEjVE2vtmLRT1WR_29mVjDc_1utQvMIM__1XgbA&oe=639C2D0B)