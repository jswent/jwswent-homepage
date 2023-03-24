const generateEmailTemplate = function (code) {
  return (
    `
  <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "https://www.w3.org/TR/html4/strict.dtd">
  <html lang="en-US">
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <style type="text/css" nonce="">
        body,
        td,
        div,
        p,
        a,
        input {
          font-family: arial, sans-serif;
        }
      </style>
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <title>Email Verification</title>
      <style type="text/css" nonce="">
        body,
        td {
          font-size: 13px;
        }

        a:link,
        a:active {
          color: #1155cc;
          text-decoration: none;
        }

        a:hover {
          text-decoration: underline;
          cursor: pointer;
        }

        a:visited {
          color: ##6611cc;
        }

        img {
          border: 0px;
        }

        pre {
          white-space: pre;
          white-space: -moz-pre-wrap;
          white-space: -o-pre-wrap;
          white-space: pre-wrap;
          word-wrap: break-word;
          max-width: 800px;
          overflow: auto;
        }

        .logo {
          left: -7px;
          position: relative;
        }
      </style>
    </head>

    <body>
      <div class="bodycontainer">
        <div style="overflow: hidden">
          <font size="-1"
            ><u></u>
            <div width="100%" style="margin: 0; background-color: #f0f2f3">
              <div
                style="margin: auto; max-width: 600px; padding-top: 50px"
                class="m_5541928090398668105email-container"
              >
                <table
                  role="presentation"
                  cellspacing="0"
                  cellpadding="0"
                  width="100%"
                  align="center"
                  id="m_5541928090398668105logoContainer"
                  style="
                    background: #252f3d;
                    border-radius: 3px 3px 0 0;
                    max-width: 600px;
                  "
                >
                  <tbody>
                    <tr>
                      <td
                        style="
                          background: #252f3d;
                          border-radius: 3px 3px 0 0;
                          padding: 20px 0 10px 0;
                          text-align: center;
                        "
                      >
                        <img
                          src="https://www.jwswent.com/images/s-logo-dark.png"
                          width="45"
                          height="45"
                          alt="S-Logo"
                          border="0"
                          style="
                            font-family: sans-serif;
                            font-size: 15px;
                            line-height: 140%;
                            color: #555555;
                          "
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table
                  role="presentation"
                  cellspacing="0"
                  cellpadding="0"
                  width="100%"
                  align="center"
                  id="m_5541928090398668105emailBodyContainer"
                  style="
                    border: 0px;
                    border-bottom: 1px solid #d6d6d6;
                    max-width: 600px;
                  "
                >
                  <tbody>
                    <tr>
                      <td
                        style="background-color:#fff;color:#444;font-family:&#39;Amazon Ember&#39;,&#39;Helvetica Neue&#39;,Roboto,Arial,sans-serif;font-size:14px;line-height:140%;padding:25px 35px"
                      >
                        <h1
                          style="
                            font-size: 20px;
                            font-weight: bold;
                            line-height: 1.3;
                            margin: 0 0 15px 0;
                          "
                        >
                          Verify your email address
                        </h1>
                        <p style="margin: 0; padding: 0">
                          Thanks for starting the email verification process. We
                          want to make sure it's really you. Please enter the
                          following verification code when prompted. If you don’t
                          want to manage your account, you can ignore this
                          message.
                        </p>
                        <p style="margin: 0; padding: 0"></p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        style="background-color:#fff;color:#444;font-family:&#39;Amazon Ember&#39;,&#39;Helvetica Neue&#39;,Roboto,Arial,sans-serif;font-size:14px;line-height:140%;padding:25px 35px;padding-top:0;text-align:center"
                      >
                        <div style="font-weight: bold; padding-bottom: 15px">
                          Verification code
                        </div>
                        <div
                          style="
                            color: #000;
                            font-size: 36px;
                            font-weight: bold;
                            padding-bottom: 15px;
                          "
                        >
                          ` +
    code +
    ` 
                        </div>
                        <div>(This code is valid for 10 minutes)</div>
                      </td>
                    </tr>
                    <tr>
                      <td
                        style="background-color:#fff;border-top:1px solid #e0e0e0;color:#777;font-family:&#39;Amazon Ember&#39;,&#39;Helvetica Neue&#39;,Roboto,Arial,sans-serif;font-size:14px;line-height:140%;padding:25px 35px"
                      >
                        <p style="margin: 0 0 15px 0; padding: 0 0 0 0">
                          Swent Technologies will never email you and ask you to
                          disclose or verify your password, credit card, or
                          banking account number.
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table
                  role="presentation"
                  cellspacing="0"
                  cellpadding="0"
                  width="100%"
                  align="center"
                  id="m_5541928090398668105footer"
                  style="max-width: 600px"
                >
                  <tbody>
                    <tr>
                      <td
                        style="color:#777;font-family:&#39;Amazon Ember&#39;,&#39;Helvetica Neue&#39;,Roboto,Arial,sans-serif;font-size:12px;line-height:16px;padding:20px 30px;text-align:center"
                      ></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </font>
        </div>
      </div>
    </body>
  </html>`
  )
}

export default generateEmailTemplate
