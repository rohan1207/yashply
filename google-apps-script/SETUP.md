# Form intake, Google Sheet + Resend

Right now website forms only show a thank-you message. After this setup, each form writes to its own tab and emails the team.

## Sheets created automatically

| Website form | Sheet tab |
| --- | --- |
| Get a Quote popup | Get a Quote |
| Home enquiry | Home Enquiry |
| Contact page | Contact Page |
| About page | About Page |

Spreadsheet: [Primo enquiries](https://docs.google.com/spreadsheets/d/1fcYiLFtg_rimPgxwFRgCIjVICMbappI_VwzxAyUJhjY/edit)

## Deploy Apps Script

1. Open the spreadsheet, **Extensions → Apps Script**.
2. Replace `Code.gs` with this folder’s `Code.gs`.
3. **Project Settings → Script properties → Add:**
   - `RESEND_API_KEY` = the Resend key you already have (do not put it in the website)
4. **Deploy → New deployment → Web app**
   - Execute as: Me
   - Who has access: Anyone
5. Copy the web app URL.

## Connect the website

Create `.env` (not committed):

```
VITE_APPS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
```

On Render, add the same variable, then redeploy.

Mail is sent from `contact@primoglobal.in` (verified Resend domain). The team copy goes to `contact@primoglobal.in`. The customer gets a short confirmation.
