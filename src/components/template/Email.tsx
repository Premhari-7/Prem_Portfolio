export function EmailTemplate({
  userName,
  contactReason,
  userMessage,
}: EmailTemplateProps) {
  const socials = [
    {
      name: "GitHub",
      url: `https://github.com/${selfData.socials_username.github}`,
      icon: "https://cdn-icons-png.flaticon.com/512/733/733553.png",
    },
    {
      name: "LinkedIn",
      url: `https://linkedin.com/in/${selfData.socials_username.linkedin}`,
      icon: "https://cdn-icons-png.flaticon.com/512/145/145807.png",
    },
    {
      name: "LeetCode",
      url: `https://leetcode.com/${selfData.socials_username.leetcode}`,
      icon: "https://cdn.iconscout.com/icon/free/png-256/leetcode-3521542-2944960.png",
    },
    {
      name: "Instagram",
      url: `https://instagram.com/${selfData.socials_username.instagram}`,
      icon: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
    },
    {
      name: "X",
      url: `https://x.com/${selfData.socials_username.twitter}`,
      icon: "https://cdn-icons-png.flaticon.com/512/5968/5968830.png",
    },
  ];

  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Row>
              <Column style={{ width: "40px" }}>
                <Img
                  src="/images/logo.png"   // ✅ use your local logo
                  alt="PH"
                  width="40"
                  height="40"
                />
              </Column>
              <Column>
                <Text style={brandText}>Prem Hari S</Text>  {/* ✅ your name */}
              </Column>
            </Row>
          </Section>

          <Section>
            <Text style={heading}>Hey {userName}! 🚀</Text>

            <Text style={text}>
              Thanks a bunch for reaching out! 🎉 <br />
              Your message just landed safely in my inbox, and I’ll get back to you soon.
            </Text>

            <Text style={text}>
              Here&apos;s a quick recap of your message:
            </Text>

            <Text style={label}>
              📌 Reason to Contact: <strong>{contactReason}</strong>
            </Text>

            <Text style={label}>💬 Message:</Text>
            <pre style={codeBlock}>{userMessage}</pre>

            <Text style={text}>
              I&apos;ll respond as soon as possible. Looking forward to connecting with you!
            </Text>

            <Section style={socialSection}>
              <table style={socialTable}>
                <tbody>
                  <tr>
                    {socials.map((social) => (
                      <td key={social.name} style={socialIconCol}>
                        <Link href={social.url}>
                          <Img
                            src={social.icon}
                            alt={social.name}
                            width="28"
                            height="28"
                            style={socialIcon}
                          />
                        </Link>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </Section>

            <Text style={footerText}>
              You&apos;re receiving this email because you contacted me via my portfolio.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}