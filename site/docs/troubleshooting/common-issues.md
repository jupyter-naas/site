---
sidebar_position: 1
---

# Common issues

1.  **API call errors**: Ensure that you're using the correct Naas v2 API methods and parameters. Refer to the [Naas v2 API documentation](https://docs.naas.ai/api-reference) for guidance.
    
2.  **Scheduling issues**: If your scheduled notebooks aren't running as expected, verify that the schedule is set up correctly using the `naas.scheduler` API and that the specified time zone is accurate.
    
3.  **Asset not found**: If you encounter issues with assets, ensure that they have been imported into the Naas v2 asset manager and that the asset URLs in your notebooks have been updated accordingly.
    
4.  **Authentication and secret management**: If you experience authentication issues with third-party services, verify that your secrets are stored correctly using the `naas.secret` API and that the correct secret values are being used.
    
5.  **Large language model integration**: If you encounter issues when integrating large language models, ensure that you have a valid API key and that you're using the correct SDK or API methods provided by the language model provider.