import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Mainbox() {
  return (
    <Box sx={{ marginLeft: '240px' }}>
      {/* Image & Name section - at the top */}
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: 3,
        p: 3,
        pt: 2
      }}>
        <img 
          src="src/assets/20241012_110339.jpg" 
          alt="Varun Mohanta"
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            objectFit: 'cover'
          }}
        />
        <Box>
          <Typography variant="h4" component="h1">
            Varun Mohanta
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Soy Dev
          </Typography>
        </Box>
      </Box>
      
      {/* Rest of your content can go here */}
      <Box sx={{ p: 3 }}>
        {/* Add your other content here */}
        <p>
          Hi I love building cool and fun stuff with the current tech.
          Cause its just for fun and enjoyment.
        </p>
      </Box>
    </Box>
  );
}
export default Mainbox;