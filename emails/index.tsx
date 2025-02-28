import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Text,
} from "@react-email/components";
import * as React from "react";

interface EmailProps {
  userFirstname: string;
}

export const FastReportWelcomeEmail = ({ userFirstname }: EmailProps) => (
  <Html>
    <Head />
    <Preview>Obrigado por entrar na lista de espera do Fast·Report, {userFirstname}! 🎉</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`https://www.medlabz.com.br/logo.png`}
          width="220"
          height="100"
          alt="Logo MedLabz"
          style={logo}
        />
        <Text style={greeting}>Olá, {userFirstname}!</Text>
        <Text style={paragraph}>
          Obrigado por entrar na lista de espera do Fast<span style={{ color: "#A855F7", fontWeight: 500 }}>Report</span>! Somos a MedLabz, a empresa por trás desta solução que ajudará médicos com laudos mais rápidos, sem complicar o fluxo de trabalho.
        </Text>
        <Text style={paragraph}>
          Vamos mantê-lo(a) informado(a) sobre o progresso e notificá-lo(a) assim que o Fast<span style={{ color: "#A855F7", fontWeight: 500 }}>Report</span> estiver disponível para uso. Enquanto isso, se tiver alguma dúvida ou feedback, não hesite em entrar em contato respondendo diretamente a{" "}
          <a href="mailto:contato@medlabz.com.br" style={link}>
            este email
          </a>
          — estamos aqui para ajudar!
        </Text>
        <Text style={paragraph}>
          Você também pode visitar nosso site para mais informações:{" "}
          <a href="https://www.medlabz.com.br" style={link}>
            www.medlabz.com.br
          </a>
        </Text>
        <Text style={signOff}>
          Atenciosamente,
          <br />
          <span style={{ fontWeight: 600 }}>Equipe MedLabz</span>
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          Você recebeu este email porque se inscreveu na lista de espera do Fast<span style={{ color: "#A855F7", fontWeight: 500 }}>Report</span>. Se acredita que isso é um erro, sinta-se à vontade para ignorar este email.
        </Text>
      </Container>
    </Body>
  </Html>
);

FastReportWelcomeEmail.PreviewProps = {
  userFirstname: "Carlos",
} as EmailProps;

export default FastReportWelcomeEmail;

const main = {
  background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
  fontFamily: 'Inter, "Helvetica Neue", Helvetica, Arial, sans-serif',
  padding: "40px 0",
  color: "#f5f5f5",
};

const container = {
  margin: "0 auto",
  padding: "32px 40px 48px",
  backgroundColor: "#1a1a1a",
  borderRadius: "12px",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
  maxWidth: "600px",
  border: "1px solid #333333",
};

const logo = {
  margin: "0 auto",
  paddingBottom: "24px",
};

const greeting = {
  fontSize: "22px",
  lineHeight: "30px",
  fontWeight: "600",
  marginBottom: "16px",
  color: "#ffffff",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
  marginBottom: "20px",
  color: "#e0e0e0",
};

const link = {
  color: "#A855F7",
  textDecoration: "underline",
  fontWeight: "500",
};

const signOff = {
  fontSize: "16px",
  lineHeight: "26px",
  marginTop: "32px",
  color: "#e0e0e0",
};

const hr = {
  borderColor: "#333333",
  margin: "24px 0",
};

const footer = {
  color: "#9e9e9e",
  fontSize: "13px",
  lineHeight: "20px",
};
