import { Container, ListItem, Toolbar, Typography } from "@mui/material";
import React from "react";
import StarIcon from "@mui/icons-material/Star";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Grid from "@mui/material/Grid";
import hero from ".././assets/hero.png";
import Up from ".././assets/Up.png";
import Box from "@mui/material/Box";
import logoImg from "../../src/assets/sid.png";
import cardImg from "../../src/assets/card.png";
import CardMedia from "@mui/material/CardMedia";
import two from "../../src/assets/two.png";
import three from "../../src/assets/three.png";
import CardActionArea from "@mui/material/CardActionArea";
import s from "../../src/assets/s.png";
import i from "../../src/assets/i.png";
import d from "../../src/assets/d.png";
import r from "../../src/assets/r.png";
import avatar from "../../src/assets/Avatar.png";
import secondLogo from '../../src/assets/two.png';
import thirdLogo from '../../src/assets/three.png';
import one from '../../src/assets/one.png'


const Home = () => {
  return (
    <>
     
      {/* Hero-Section Starts */}
      <Container
        maxWidth="lg"
        sx={{ backgroundColor: '#051139', minHeight: "100vh" }}
      >
        <Grid container spacing={4} sx={{marginTop:'70px'}}>
          <Grid item xs={6}>
            <Typography sx={{marginTop:'30px', fontFamily:'popins,sans-serif',fontSize:'16px',fontWeight:'700'}}>
              Welcome to Yorfy
            </Typography>
            <Typography variant="h4" sx={{ fontFamily: "popins,sans-serif", marginTop:'25px', fontSize:'64px', fontWeight:'700' }}>
              
                Now Available, Meet Yorfy NFT Collection {""}
                <span>
                  <StarIcon sx={{ fontSize: "50px", color: "goldenrod" }} />
                </span>
            </Typography>
            <Typography sx={{marginTop:'20px', fontFamily:'popins,sans-serif', fontSize:'16px', fontWeight:'400', lineHeight:'30px'}}>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
             
            </Typography>
            <Typography sx={{ marginTop: "40px", marginBottom: "50px" }}>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                divider={
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{ borderColor: "white", border:'1px solid #3F496C', height:'150px'}}
                  />
                }
                spacing={2}
              >
                <ListItem sx={{fontFamily:'popins,sans-serif',fontSize:'30px', fontWeight:'700'}}>
                  <h1>564</h1>
                </ListItem>
                <ListItem sx={{fontFamily:'popins,sans-serif',fontSize:'30px', fontWeight:'700'}}>
                 
                  <h1>42</h1>
                </ListItem>
                <ListItem sx={{fontFamily:'popins,sans-serif',fontSize:'30px', fontWeight:'700'}}>
                  <h1>378</h1>
                </ListItem>
              </Stack>
            </Typography>
          </Grid>
    <Grid item xs={6} sx={{ marginTop: "140px" , paddingLeft:'20px'}}>
    <Box
        sx={{
          background: `linear-gradient(to right, #5A099E, #1637AF)`,
          borderRadius: "5px",
          display: "flex",
          alignItems: "flex-start",
          padding: "20px",
          marginTop:'150px',
          justifyContent:'flex-start'
          
        }}
      >
        
        <Box sx={{ position: "relative"}}>
          <img
            src={hero}
            alt="Logo"
            style={{ width: "100%", height: "auto", marginTop:'-300px' }}
          />
          <ButtonGroup
            disableElevation
            variant="contained"
            aria-label="Disabled elevation buttons"
            sx={{ position: "absolute", bottom: "10px", right: "10px" }}
          >
            <Button
              style={{
                marginRight: "10px",
                backgroundColor: "#1C49E9",
                padding: "8px 40px",
                borderRadius: "8px",
                fontFamily:'popins,sans-serif',
                fontSize:'16px',
                fontWeight:'600'
              }}
            >
              Buy on OpenSea
            </Button>
            <Button style={{ marginLeft: "10px", borderRadius: "8px", border:'1px solid white', backgroundColor:'transparent' }}>
              Know More
            </Button>
          </ButtonGroup>
        </Box>
      </Box>
    </Grid>
        </Grid>
      </Container>
      {/* Hero-Section-ends */}
      {/* Second-Section Starts */}
      <Box sx={{ backgroundColor: "rgba(170, 0, 255, 1)", marginTop: "30px" }}>
        <Container
          maxWidth="md"
          sx={{ paddingTop: "30px", paddingBottom: "20px" }}
        >
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Typography>Discount Sale</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography>
                <img src={Up} alt="Logo" style={{ objectFit: "cover" }} />
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography>Discount Sale</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography>
                <img src={Up} alt="Logo" style={{ objectFit: "cover" }} />
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* Second-Section ends */}
      {/* Third-section Starts */}
      <Container maxWidth='lg'  sx={{ paddingTop: "4rem" ,paddingBottom:'1rem', backgroundColor:'#051139'}}>
        <Typography sx={{ alignItems: "center", textAlign: "center" }}>
          <Typography sx={{fontFamily:'popins,sans-serif', fontSize:'16px', fontWeight:'700', color:'rgba(86, 153, 255, 1)'}}>
            <h5>Featured</h5>
          </Typography>
          <Typography sx={{fontFamily:'popins,sans-serif', fontSize:'80px', fontWeight:'700', textAlign:'center'}}>
            Hot Trending On This Week from Yorfy
          </Typography>
          <Typography sx={{ textAlign: "center", fontSize:'20px', fontWeight:'400', lineHeight:'30px' }}>
            
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
           
          </Typography>
        </Typography>

        {/* Cards-section */}

        <Grid
          container
          justifyContent="center"
          alignItems="center"
          spacing={0}
          sx={{ backgroundColor: "#081956", borderRadius: "10px",marginTop:'40px' }}
        >
          <Grid item xs={12} sm={4} sx={{ overflow: "hidden" }}>
            <Grid container direction="column">
              <Grid item>
                <Typography variant="body1" align="center">
                  <img src={logoImg} alt="Logo" />
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  align="center"
                  sx={{ marginTop: "2px", fontSize:'40px', fontWeight:'700' }}
                >
                  YourEyes
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  align="center"
                  sx={{ marginTop: "2px", fontSize:'40px', fontWeight:'700'  }}
                >
                  #234
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  align="center"
                  sx={{
                    marginTop: "4px",
                    fontFamily: "popins,sans-serif",
                    fontSize: "16px",
                    fontWeight: "400",
                    lineHeight:'32px'
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={4}>
            <CardMedia
              component="img"
              src={cardImg}
              alt="Logo"
              sx={{ width: "100%", height: "100%" }}
            />
          </Grid>

          <Grid item xs={12} sm={4} sx={{ overflow: "hidden" }}>
            <Grid container direction="column">
              <Grid item>
                <Typography variant="body1" align="center" sx={{fontSize:'39px', fontWeight:'700', color:'white'}}>
                  Interesting with This Item?
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  align="center"
                  sx={{
                    marginTop: "4px",
                    fontFamily: "popins,sans-serif",
                    fontSize: "16px",
                    fontWeight: "400",
                    lineHeight:'32px'
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  sx={{ marginTop: "6px" }}
                >
                  <Button
              style={{
                marginRight: "10px",
                backgroundColor: "#1C49E9",
                padding: "8px 40px",
                borderRadius: "8px",
                fontFamily:'popins,sans-serif',
                fontSize:'16px',
                fontWeight:'600',
                marginTop:'10px',
                color:'white'
              }}
            >
              Buy on OpenSea
            </Button>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      {/* Third-Section-ends */}
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor:'#051139',
          paddingTop : '4rem',
          paddingBottom:'1rem'
        }}
      >
        <Typography sx={{fontFamily:'popins,sans-serif', fontSize:'16px', fontWeight:'700', color:'rgba(86, 153, 255, 1)'}}>Collection</Typography>
        <Typography sx={{fontFamily:'popins,sans-serif', fontSize:'56px', fontWeight:'700', textAlign:'center'  }}>Yorfy NFT Collections</Typography>
        <Typography sx={{fontFamily:'popins,sans-serif', fontSize:'20px', fontWeight:'400', textAlign:'center', lineHeight:'32px'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </Container>
      {/* Second-Cards Section */}
      <Container sx={{backgroundColor:'#051139', marginTop:'30px'}}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sm={4}
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
           
          >
            <Card
              sx={{
                maxWidth: 350,
                backgroundColor: "transparent",
                border: "1px solid blue",
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  src={one}
                  alt="One Image"
                  sx={{ width: "100%", height: "100%" }}
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    <span style={{ display: "flex", alignItems: "center" }}>
                      <img
                        src={logoImg}
                        alt="Logo"
                        style={{
                          width: "30px",
                          height: "30px",
                          marginRight: "10px",
                        }}
                      />
                      <Typography sx={{fontFamily:'popins,sans-serif', fontSize:'24px', fontWeight:'700', color:'white'}}>
                      <span>YorNoose # 432</span>
                      </Typography>
                     
   
                    </span>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid
            item
            xs={12}
            sm={4}
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Card
              sx={{
                maxWidth: 340,
                backgroundColor: "transparent",
                border: "1px solid blue",
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  src={secondLogo}
                  alt="One Image"
                  sx={{ width: "100%", height: "100%" }}
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    <span style={{ display: "flex", alignItems: "center" }}>
                      <img
                        src={logoImg}
                        alt="Logo"
                        style={{
                          width: "30px",
                          height: "30px",
                          marginRight: "10px",
                        }}
                      />
                      <Typography sx={{fontFamily:'popins,sans-serif', fontSize:'24px', fontWeight:'700', color:'white'}}>
                      <span>YorHayr #332</span>
                      </Typography>
                    </span>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Card
              sx={{
                maxWidth: 340,
                backgroundColor: "transparent",
                border: "1px solid blue",
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  src={thirdLogo}
                  alt="One Image"
                  sx={{ width: "100%", height: "100%" }}
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    <span style={{ display: "flex", alignItems: "center" }}>
                      <img
                        src={logoImg}
                        alt="Logo"
                        style={{
                          width: "30px",
                          height: "30px",
                          marginRight: "10px",
                        }}
                      />
                    <Typography sx={{fontFamily:'popins,sans-serif', fontSize:'24px', fontWeight:'700', color:'white'}}>
                      <span>YorMwoth #765</span>
                      </Typography>
                    </span>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>

        <Typography
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          marginTop={'30px'}
         
        >
          <Button sx={{border:'1px solid white'}}>View an Open Sea</Button>
        </Typography>
      </Container>
      {/* Third-Section-ends */}
      {/* Fourth-Section-starts */}
      <Container sx={{backgroundColor:'#051139', paddingTop:'4rem', paddingBottom:'1rem'}}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography sx={{fontFamily:'popins,sans-serif', fontSize:'16px', fontWeight:'700', color:'rgba(86, 153, 255, 1)'}}>Community</Typography>
            <Typography sx={{fontFamily:'popins,sans-serif', fontSize:'45px', fontWeight:'700'}}>Join Our Community and Get Many Benefits</Typography>
            <Typography sx={{fontFamily:'popins,sans-serif', fontSize:'16px', fontWeight:'400', lineHeight:'30px'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
            <Typography>
            <Button
              style={{
                marginRight: "10px",
                backgroundColor: "#1C49E9",
                padding: "8px 40px",
                borderRadius: "8px",
                fontFamily:'popins,sans-serif',
                fontSize:'16px',
                fontWeight:'600',
                color:'white',
                marginTop:'20px'
              }}
            >
              Join Our Discord
            </Button>
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
          <Box sx={{ backgroundColor: 'rgba(8, 25, 86, 1)', borderRadius: '5px', display: 'flex',  alignItems: 'center', paddingLeft: '10px', width: '400px', 
        transition: 'transform 1s ease',
        // other styles...
        '&:hover': {
          transform: 'rotate(360deg)',
        }, }}>
            <Typography sx={{ marginRight: '10px', paddingTop: '10px' }}>
              <img src={avatar} alt="" srcSet="" />
            </Typography>
            <Box sx={{ marginRight: '10px' }}>
              <Typography>
                ShooPharDhie
              </Typography>
              <Typography sx={{fontFamily:'popins,sans-serif', fontSize:'12px', fontWeight:'400'}}>
                Last Online 2 Hour Ago
              </Typography>
            </Box>
            <Typography  sx={{ paddingLeft: '10px', color: 'white' , marginLeft:'auto', marginRight: '10px'}}>
              ....
            </Typography>
          </Box>

          <Box sx={{ backgroundColor: 'rgba(8, 25, 86, 1)', borderRadius: '5px', display: 'flex',  alignItems: 'center', paddingLeft: '10px', width: '400px', marginTop:'20px',  transition: 'transform 1s ease',
        // other styles...
        '&:hover': {
          transform: 'rotate(360deg)',
        },}}>
            <Typography sx={{ marginRight: '10px', paddingTop: '10px' }}>
              <img src={avatar} alt="" srcSet="" />
            </Typography>
            <Box sx={{ marginRight: '10px' }}>
              <Typography>
                ShooPharDhie
              </Typography>
              <Typography sx={{fontFamily:'popins,sans-serif', fontSize:'12px', fontWeight:'400'}}>
                Last Online 2 Hour Ago
              </Typography>
            </Box>
            <Typography  sx={{ paddingLeft: '10px', color: 'white' , marginLeft:'auto', marginRight: '10px'}}>
              ....
            </Typography>
          </Box>

          <Box sx={{ backgroundColor: 'rgba(8, 25, 86, 1)', borderRadius: '5px', display: 'flex',  alignItems: 'center', paddingLeft: '10px', width: '400px' , marginTop:'20px' ,  transition: 'transform 1s ease',
        // other styles...
        '&:hover': {
          transform: 'rotate(360deg)',
        },}}>
            <Typography sx={{ marginRight: '10px', paddingTop: '10px' }}>
              <img src={avatar} alt="" srcSet="" />
            </Typography>
            <Box sx={{ marginRight: '10px' }}>
              <Typography>
                ShooPharDhie
              </Typography>
              <Typography sx={{fontFamily:'popins,sans-serif', fontSize:'12px', fontWeight:'400'}}>
                Last Online 2 Hour Ago
              </Typography>
            </Box>
            <Typography  sx={{ paddingLeft: '10px', color: 'white' , marginLeft:'auto', marginRight: '10px'}}>
              ....
            </Typography>
          </Box>
            </Grid>
          </Grid>
        
      </Container>
      {/* Fourth-Section-ends */}
      {/* Fifth-Section-Starts */}
      <Box sx={{ backgroundColor: "#AA00FF", marginTop:'4rem', marginBottom:'1rem',padding:'3px' }}>
        <Container
          maxWidth="md"
          sx={{paddingTop:'30px', paddingBottom:'20px'}}
        >
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Typography>Discount Sale</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography>
                <img src={Up} alt="Logo" style={{ objectFit: "cover" }} />
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography>Discount Sale</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography>
                <img src={Up} alt="Logo" style={{ objectFit: "cover" }} />
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* Fifth-section-ends */}
      {/* Sixth-Section-Starts */}
      <Container sx={{ marginTop: "4rem", marginBottom: "1rem" }}>
        <Typography align="center" sx={{fontFamily:'popins,sans-serif', fontSize:'16px', fontWeight:'700', color:'rgba(86, 153, 255, 1)'}}>Collaboration</Typography>
        <Typography align="center" sx={{ fontFamily:'popins,sans-serif', fontSize:'56px', fontWeight:'700', color:'white', marginTop:'10px'}} >
          Our Partners
        </Typography>

        <Grid
          container
          spacing={3}
          style={{ flexWrap: "nowrap", marginTop: "20px" }}
        >
          <Grid item xs={4}>
            <Typography>
              <img src={s} alt="Logo" style={{ objectFit: "cover" }} />
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography>
              <img src={i} alt="Logo" style={{ objectFit: "cover" }} />
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography>
              <img src={d} alt="Logo" style={{ objectFit: "cover" }} />
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography>
              <img src={r} alt="Logo" style={{ objectFit: "cover" }} />
            </Typography>
          </Grid>
        </Grid>
      </Container>
      {/* Sixth-Section-ends */}
      {/* Seventh-Section-Starts */}
      <Container sx={{backgroundColor:'#051139', paddingTop:'4rem'}}>
        <Container
          sx={{
            backgroundColor: "#081956",
            borderRadius: "10px",
            paddingTop: "4rem",
            paddingBottom: "5rem",
          }}
        >
          <Typography align="center" sx={{fontFamily:'popins,sans-serif', fontSize:'16px', fontWeight:'700', color:'rgba(86, 153, 255, 1)'}}>Newsletter</Typography>
          <Typography align="center" sx={{ fontFamily:'popins,sans-serif', fontSize:'46px', fontWeight:'700', color:'white', marginTop:'10px'}}>
            You Do Not Want to Miss Out on this!
          </Typography>
          <Typography align="center" sx={{ fontFamily:'popins,sans-serif', fontSize:'20px', fontWeight:'300', color:'white', marginTop:'10px'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
          <Typography
            align="center"
            display="flex"
            alignItems="center"
            justifyContent="center"
            marginTop='30px'
            
          >
            <input
              type="email"
              placeholder="Enter Your Email"
              style={{
                width: "40%",
                border: "1px solid white",
                padding: "10px",
                borderRadius: "7px",
                marginRight: "10px",
                backgroundColor:'inherit',
                color:'white'
               
              }}
            />
            <Button variant="contained" color="primary" sx={{backgroundColor:'rgba(30, 80, 255, 1)'}}>
              Submit
            </Button>
          </Typography>
        </Container>
      </Container>
    </>
  );
};

export default Home;
