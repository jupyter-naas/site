---
sidebar_position: 1
---

# Common issues

1.  **Function call errors**: Ensure that you're using the correct low-code functions methods and parameters. Refer to the [Jobs](resources/developers/jobs/scheduler) or [Drivers](resources/developers/drivers/airtable) documentation pages for guidance.
    
2.  **Scheduling issues**: If your scheduled notebooks aren't running as expected, verify that the schedule is set up correctly using the `naas.scheduler` function and that the specified time zone is accurate.
    
3.  **Asset not found**: If you encounter issues with assets, ensure that they have been imported into the Naas manager and that the asset URLs in your notebooks have been updated accordingly.
    
4.  **Authentication and secret management**: If you experience authentication issues with third-party services, verify that your secrets are stored correctly using the `naas.secret` API and that the correct secret values are being used.
    
5.  **Large language model integration**: If you encounter issues when using large language models in Naas Chat, please provide us feedback on support@naas.ai