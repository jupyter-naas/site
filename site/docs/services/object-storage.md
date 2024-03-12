---
sidebar_position: 0
---

# Object Storage API
---

## Description
Our Object Storage service, built on top of Amazon Web Services (AWS) S3, provides a flexible and secure storage service for users. This solution is designed to be easily accessible via our Application Programming Interface (API), allowing users to effortlessly perform Create, Read, Update, and Delete (CRUD) operations.

In addition to these operations, users can also request credentials to utilize this storage location with any tool that is S3 compliant. This feature enhances the versatility of our storage solution, making it compatible with a wide range of tools and applications that support S3.

To further streamline the interaction with our storage solution, we offer the naas-python library (Software Development Kit or SDK). This library simplifies the process of integrating our storage solution into your applications, making it more convenient to leverage its capabilities.

Security and privacy are paramount in our Object Storage solution. We rely on the robust security measures provided by AWS S3 to safeguard your data. AWS S3 offers encryption for data at rest, ensuring that your stored data is protected from unauthorized access. It also provides secure access management features, allowing you to control who can access your data.

Furthermore, AWS S3 guarantees high availability and durability, ensuring that your data is always accessible when you need it and is protected against loss. It achieves this by redundantly storing your data across multiple facilities and ensuring automatic error correction. For more details on these features, you can refer to the [AWS S3 documentation](https://aws.amazon.com/s3/).

Our Object Storage solution provides a secure, reliable, and user-friendly storage service for your data. Whether you are storing data for application development, analytics, or backup and restore, our solution offers the flexibility, security, and reliability you need.

## License 
Close source

## Price 
Contact us

## API Docs
[https://api.naas.ai/redoc](https://api.naas.ai/redoc) 

Here's an example of the bucket structure in bullet points:

* naas-user-bucket
    * chats 
        * chat-id1
            * 2022-01-01
                * chat1.txt
                * chat2.txt
            * 2022-01-02
                * chat3.txt
                * chat4.txt
            * attachments
                * document1.pdf
                * Document2.docx
        * chat-id2
            * 2022-01-01
                * chat1.txt
                * Chat2.txt
            * attachments
                * document3.xls
                * document4.pdf
    * assistants
        * AIA
            * results
                * result1.txt
                * result2.txt
        * ABI
            * results
                * result1.txt
                * result2.txt
    * documents
        * document1.pdf
        * document2.docx
        * document3.xlsx

**Features**: 



* List object storages
* Create object storage
* Get object storage
* Update object storage
* Delete object storage
* Get object storage credentials
* List objects in object storage
* Download object from object storage
* Update an object from object storage
* Upload object in object storage
* Delete object in object storage

