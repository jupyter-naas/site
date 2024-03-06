---
sidebar_position: 1
---
# Integromat

Integromat is a powerful automation tool that connects your apps and services to work together. It is an advanced online automation platform that has the ability to automate manual processes without the need for coding.

Check out their official [website](https://integromat.com) to get started.

## Webhook

With `naas_drivers`, you can send HTTP requests to a specific URL (the webhook URL) to trigger an Integromat scenario.

```python
import naas_drivers

# Webhook URL and data
url = "https://hook.integromat.com/7edtlwmn8foer0r9i9ainjvsz3vxmwos"
data = { "first_name":"Bryan", "last_name":"Helmig", "age": 27 }

# Connect and send request
result = naas_drivers.integromat.connect(url).send(data)
```

With the above code, Integromat connects with the provided URL and sends the specified data.

For more information about how to work with webhooks in Integromat, you can refer to the [official Integromat webhooks documentation](https://support.integromat.com/hc/en-us/articles/360006249313-Webhooks).