import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  CssBaseline,
  Button,
  Stack,
  Avatar,
  TextField,
  Grid,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "@mui/material";

import React from "react";
import profile from "./assets/hina.jpg";
import pic1 from "./assets/kana.jpg";

function App() {
  return (
    <>
      <CssBaseline />
      {/* AppBar---------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
      <AppBar
        position="sticky"
        color="default"
        sx={{ bgcolor: "#0c0c0c", color: "#fff" }}
      >
        <Toolbar sx={{ display: "flex", margin: "0 auto", width: "95%" }}>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            ADISORN NANGNOI
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button color="inherit">Work</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Contact</Button>
          </Stack>
        </Toolbar>
      </AppBar>
      {/* AppBar---------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
      <Box
        sx={{
          bgcolor: "#0c0c0c",
          color: "#fff",
          minHeight: "100vh",
          width: "100vw",
          overflowX: "hidden",
        }}
      >
        {/* Header Section */}
        <Box
          id="header"
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          alignItems="center"
          py={10}
          px={{ xs: 2, md: 20 }}
        >
          <Box flex={1}>
            <Typography variant="h1" fontWeight="bold">
              HI, I AM
            </Typography>
            <Typography variant="h1" fontWeight="bold" sx={{ mb: 2 }}>
              Adisorn N.
            </Typography>
            <Typography
              color="#C7C7C7"
              variant="body1"
              sx={{ mb: 3, maxWidth: 400 }}
            >
              นักพัฒนาเว็บไซต์พร้อมเติบโตจากประเทศไทย
              ที่มีความหลงใหลในการสร้างเว็บไซต์ที่เข้าถึงได้และเป็นมิตรกับผู้ใช้
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                sx={
                  {
                    bgcolor: "#98eecc",
                    color: "#0c0c0c",
                    "&:hover": {
                      bgcolor: "#baffff",
                    },
                  }
                }
                style={{ borderRadius: 20 }}
              >
                <Typography
                  style={{
                    fontSize: 14,
                    padding: 5,
                    color: "#0c0c0c",
                    fontWeight: "bold",
                  }}
                >
                  Contact Me
                </Typography>
              </Button>
              <Button
                  sx={{
                    borderRadius: 100,
                    minWidth: 50,
                    height: 50,
                    bgcolor: "#1A1A1A",
                    color: "white",
                    "&:hover": {
                      bgcolor: "#555",
                    },
                  }}
                >
                  <LinkedInIcon />
                </Button>
                <Button
                  sx={{
                    borderRadius: 100,
                    minWidth: 50,
                    height: 50,
                    bgcolor: "#1A1A1A",
                    color: "white",
                    "&:hover": {
                      bgcolor: "#555",
                    },
                  }}
                >
                  <GitHubIcon />
                </Button>
            </Stack>
          </Box>
          <Avatar
            alt="Adisorn N."
            src={profile}
            sx={{ width: 500, height: 500, borderRadius: 4 }}
          />
        </Box>
        <hr
          color="grey"
          style={{
            width: "95%",
            height: "0.5px",
            marginTop: "40px",
            marginBottom: "40px",
          }}
        />
        {/* About Section */}
        <Box
          id="about"
          display="flex"
          py={5}
          px={{ xs: 2, md: 10 }}
          justifyItems={"space-between"}
          alignItems="start"
        >
          <Typography
            variant="h2"
            fontWeight="bold"
            width={"100%"}
            textAlign="start"
            
          >
            ABOUT ME
          </Typography>
          <Grid container spacing={5}>
            <Grid
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "80%",
                marginLeft: "90px",
              }}
            >
              <Typography variant="h5">
                ผมเป็นนักพัฒนาเว็บไซต์ฝั่งฟรอนท์เอนด์ที่ทำงานอยู่ใน กรุงเทพฯ
                กำลังมองหาโอกาสที่น่าตื่นเต้นในการทำงาน
                มีพื้นฐานการศึกษาด้านวิศวกรรมซอฟต์แวร์
              </Typography>
              <Typography
                color="#C7C7C7"
                marginTop={2}
                marginBottom={5}
                variant="body1"
              >
                ชอบให้ความสำคัญกับการเข้าถึง (accessibility) เมื่อพัฒนาเว็บไซต์
                มีความกระตือรือร้นและอยากรู้ อยากเห็นเกี่ยวกับการแก้ปัญหาต่างๆ
                ปัจจุบันกำลังศึกษาเรียนรู้เกี่ยวกับ React.js
                และการออกแบบเว็บไซต์เล็กน้อย เมื่อไม่ได้เขียนโปรแกรม
                ผมชอบเล่นฟุตบอล ถ่ายภาพ และเล่นเกม FIFA, Diablo
                กำลังเรียนรู้เพิ่มเติมเพื่อพัฒนาทักษะอยู่เสมอ
              </Typography>
              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  sx={
                    {
                      bgcolor: "#98eecc",
                      color: "#0c0c0c",
                      "&:hover": {
                        bgcolor: "#baffff",
                      },
                    }
                  }
                  style={{ borderRadius: 20 }}
                >
                  <Typography
                    style={{
                      fontSize: 14,
                      padding: 5,
                      color: "#0c0c0c",
                      fontWeight: "bold",
                    }}
                  >
                    DOWNLOAD RESUME
                  </Typography>
                </Button>
                <Button
                  sx={{
                    borderRadius: 100,
                    minWidth: 50,
                    height: 50,
                    bgcolor: "#1A1A1A",
                    color: "white",
                    "&:hover": {
                      bgcolor: "#555",
                    },
                  }}
                >
                  <LinkedInIcon />
                </Button>
                <Button
                  sx={{
                    borderRadius: 100,
                    minWidth: 50,
                    height: 50,
                    bgcolor: "#1A1A1A",
                    color: "white",
                    "&:hover": {
                      bgcolor: "#555",
                    },
                  }}
                >
                  <GitHubIcon />
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Box>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={pic1}
            alt="about"
            style={{ width: "90%", borderRadius: 16 }}
          />
        </Grid>
        <hr
          color="grey"
          style={{
            width: "95%",
            height: "0.5px",
            marginTop: "40px",
            marginBottom: "40px",
          }}
        />
        {/* Capabilities Section */}
        <Box
          id="capabilities"
          display="flex"
          alignItems={"start"}
          px={{ xs: 2, md: 10 }}
        >
          <Typography
            width={"100%"}
            variant="h2"
            fontWeight="bold"
            gutterBottom
          >
            MY CAPABILITIES
          </Typography>

          <Stack
            width={"70%"}
            ml={5}
            direction="row"
            justifyContent="space-between"
            flexWrap="wrap"
          >
            <Typography color="#C7C7C7" sx={{ marginBottom: 3 }}>
              ผมมองหาโอกาสในการเพิ่มทักษะใหม่ๆ อยู่เสมอ ทั้งการพัฒนาฟรอนท์เอนด์
              แบ็กเอนต์ การออกแบบ UX/UI ฐานข้อมูล
            </Typography>

            {[
              "HTML",
              "CSS",
              "JAVASCRIPT",
              "FLUTTER",
              "DART",
              "IoT",
              "REACT",
              "DATABASE",
              "PYTHON",
            ].map((skill) => (
              <Button
                key={skill}
                variant="outlined"
                color="inherit"
                sx={{
                  borderRadius: 5,
                  paddingLeft: 3,
                  paddingRight: 3,
                  marginBottom: 2,
                  width: "30%",
                }}
              >
                {skill}
              </Button>
            ))}
          </Stack>
        </Box>
        <hr
          color="grey"
          style={{
            width: "95%",
            height: "0.5px",
            marginTop: "40px",
            marginBottom: "40px",
          }}
        />
        {/* Experience Section */}
        <Box
          id="experience"
          width={"100%"}
          display="flex"
          py={5}
          px={{ xs: 2, md: 10 }}
        >
          <Typography
            width={"100%"}
            variant="h2"
            fontWeight="bold"
            gutterBottom
          >
            MY EXPERIENCE
          </Typography>
          <Box width={"70%"} flexDirection={"column"} mr={5}>
            <Box mt={2}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent={"space-between"}
              >
                <Typography fontWeight="bold">Freelance Developer </Typography>
                <Typography color="#C7C7C7" fontWeight="normal">
                  Nov 2023 – Present
                </Typography>
              </Box>
              <Typography mt={1} color="#C7C7C7">
                พัฒนาและปรับปรุงส่วนติดต่อผู้ใช้สำหรับเว็บแอปพลิเคชันโดยใช้
                React.js ทำงานร่วมกับทีมออกแบบ UX/UI
                เพื่อสร้างประสบการณ์ผู้ใช้ที่น่าประทับใจ
                ปรับปรุงความเร็วในการโหลดเว็บไซต์ด้วยเทคนิคการเพิ่มประสิทธิภาพต่างๆ
                ร่วมพัฒนาและดูแลไลบรารีคอมโพเนนต์ภายในองค์กร
              </Typography>
            </Box>
            <Box mt={3}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent={"space-between"}
              >
                <Typography fontWeight="bold">Front-End Intern</Typography>
                <Typography color="#C7C7C7" fontWeight="normal">
                  Sep 2023 – Nov 2023
                </Typography>
              </Box>
              <Typography mt={1} color="#C7C7C7">
                พัฒนาเว็บไซต์ลูกค้าโดยใช้ HTML, CSS และ JavaScript
              </Typography>
              <Typography color="#C7C7C7">
                ช่วยปรับปรุงการเข้าถึง (Accessibility)
                ของเว็บไซต์ให้สอดคล้องกับมาตรฐาน WCAG
              </Typography>
              <Typography color="#C7C7C7">
                ทำงานร่วมกับทีมแบ็คเอนด์เพื่อเชื่อมต่อ API
              </Typography>
            </Box>
          </Box>
        </Box>
        <hr
          color="grey"
          style={{
            width: "95%",
            height: "0.5px",
            marginTop: "40px",
            marginBottom: "40px",
          }}
        />

        {/* Contact Section */}
        <Box id="contact" py={5} px={{ xs: 2, md: 10 }} color="white">
          <Grid width={"100%"} container spacing={4} alignItems="flex-start">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" fontWeight="bold" gutterBottom>
                LET’S CONNECT
              </Typography>
              <Typography color="#C7C7C7" sx={{ mb: 1 }}>
                Say hello at <Link color="inherit">chanintornc@sau.ac.th</Link>
              </Typography>
              <Typography color="#C7C7C7" sx={{ mb: 2 }}>
                For more info, here's my{" "}
                <Link href="#" color="inherit">
                  resume
                </Link>
              </Typography>
              <Stack direction="row" spacing={2} mb={3}>
                <Button
                  sx={{
                    borderRadius: 100,
                    minWidth: 50,
                    height: 50,
                    bgcolor: "#1A1A1A",
                    color: "white",
                    "&:hover": {
                      bgcolor: "#555",
                    },
                  }}
                >
                  <LinkedInIcon />
                </Button>
                <Button
                  sx={{
                    borderRadius: 100,
                    minWidth: 50,
                    height: 50,
                    bgcolor: "#1A1A1A",
                    color: "white",
                    "&:hover": {
                      bgcolor: "#555",
                    },
                  }}
                >
                  <GitHubIcon />
                </Button>
                <Button
                  sx={{
                    borderRadius: 100,
                    minWidth: 50,
                    height: 50,
                    bgcolor: "#1A1A1A",
                    color: "white",
                    "&:hover": {
                      bgcolor: "#555",
                    },
                  }}
                >
                  <InstagramIcon />
                </Button>
                <Button
                  sx={{
                    borderRadius: 100,
                    minWidth: 50,
                    height: 50,
                    bgcolor: "#1A1A1A",
                    color: "white",
                    "&:hover": {
                      bgcolor: "#555",
                    },
                  }}
                >
                  <TwitterIcon />
                </Button>
              </Stack>
            </Grid>
            <Grid
              container
              flexDirection={"column"}
              flex={1}
              item
              xs={12}
              md={6}
              spacing={2}
              ml={40}
              mr={10}
            >
              <Grid item xs={12}>
                <Typography gutterBottom>Name</Typography>
                <TextField
                  fullWidth
                  InputProps={{
                    style: {
                      color: "#fff",
                      backgroundColor: "#1A1A1A",
                      borderRadius: 0,
                    },
                  }}
                  InputLabelProps={{ style: { color: "#ccc" } }}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography gutterBottom>Email</Typography>
                <TextField
                  fullWidth
                  InputProps={{
                    style: {
                      color: "#fff",
                      backgroundColor: "#1A1A1A",
                      borderRadius: 0,
                    },
                  }}
                  InputLabelProps={{ style: { color: "#ccc" } }}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography gutterBottom>Subject</Typography>
                <TextField
                  fullWidth
                  InputProps={{
                    style: {
                      color: "#fff",
                      backgroundColor: "#1A1A1A",
                      borderRadius: 0,
                    },
                  }}
                  InputLabelProps={{ style: { color: "#ccc" } }}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography gutterBottom>Message</Typography>
                <TextField
                  fullWidth
                  multiline
                  minRows={4}
                  maxRows={4}
                  InputProps={{
                    style: {
                      color: "#fff",
                      backgroundColor: "#1A1A1A",
                      borderRadius: 0,
                    },
                  }}
                  InputLabelProps={{ style: { color: "#ccc" } }}
                  sx={{ textarea: { color: "#fff" } }}
                />
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  sx={{
                    mt: 2,
                    bgcolor: "#98eecc",
                    color: "#0c0c0c",
                    borderRadius: 10,
                    "&:hover": {
                      bgcolor: "#baffff",
                    },
                  }}
                >
                  <Typography fontSize={14} fontWeight={"bold"} padding={1}>
                    SUBMIT
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Box>

        {/* Footer */}
        <Typography color="#C7C7C7" ml={10} variant="body2" textAlign="start">
          © 2025 Adisorn Nangnoi
        </Typography>
      </Box>
    </>
  );
}

export default App;
