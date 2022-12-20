import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";

const password = "p@ssw0rd";

const bucket = new aws.s3.Bucket("test-bucket", {
  bucket: `test-bucket`,
  tags: {
    Name: `test-bucket`,
  },
});
