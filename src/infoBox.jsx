import Card from '@mui/material/Card';
import './infoBox.css';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function InfoBox({info}){
    const INIT_URL = "https://media.istockphoto.com/id/878607638/photo/clouds-aerial-view.webp?b=1&s=170667a&w=0&k=20&c=aa_no7g26uq0UnZYnNLZtZopKsjnST-rGqut5dnRv20=";

    const HOT_URL ="https://media.istockphoto.com/id/1254065595/photo/hot-summer-or-heat-wave-background.webp?b=1&s=170667a&w=0&k=20&c=3pJ8IywW-9H-bcZ2XNGG0EaKwYiWD3XdMLC-mAC6dFI=";
    const COLD_URL="https://media.istockphoto.com/id/649356542/photo/adventurous-people-making-ascent-to-high-mountain-walking-on-glacier.webp?b=1&s=170667a&w=0&k=20&c=wRVtLggh8bVslxM9u824iZ_b__I1gzd0_Aei2ho7dlM=";
    const RAIN_URL="https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.webp?b=1&s=170667a&w=0&k=20&c=7nD_8127UoUACRboJelDa-h-g0afqyRP9h8jtJ5xvUo=";
    
    return (<div className="InfoBox">
        
        <div className='cardContainer'>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80? RAIN_URL : info.temp>15 ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <div>Tempreture = {info.temp}&deg;C</div>
          <div>humidity = {info.humidity}</div>
          <div>Min Temp = {info.tempMin}</div>
          <div>Max Temp = {info.tempMax}</div>
          <div>The weather is described as <b>{info.weather}</b> and feels like{info.feelslike}&deg;C</div>
        </Typography>
      </CardContent>
     
    </Card>
    </div>
    </div>)
}