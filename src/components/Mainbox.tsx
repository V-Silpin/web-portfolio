import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import PropTypes from 'prop-types';
/**
 * @param {{ selectedSection: string }} props
 */
function Mainbox({ selectedSection }: { selectedSection: string }) {
  return (
    <Box sx={{ flex: 1, background: 'var(--color-bg)', minHeight: '100vh', transition: 'var(--transition)', display: 'flex', flexDirection: 'column' }}>
      {/* Image & Name section - at the top */}
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 3,
        p: 3,
        pt: 2,
        background: 'var(--color-card)',
        borderRadius: '0 0 1em 1em',
        boxShadow: '0 2px 8px 0 rgba(60,60,60,0.06)',
        borderBottom: '1px solid var(--color-border)',
        mb: 2,
        transition: 'var(--transition)'
      }}>
        <img
          src="src/assets/profile-pic.JPG"
          alt="Varun Mohanta"
          style={{
            width: '200px',
            height: '200px',
            borderRadius: '24px',
            objectFit: 'cover',
            border: '3px solid var(--color-primary)',
            boxShadow: '0 4px 16px 0 rgba(60,60,60,0.12)',
            background: 'var(--color-bg-alt)'
          }}
        />
        <Box>
          <Typography variant="h3" component="h1" sx={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.2rem' } }}>
            Varun Mohanta
          </Typography>
          <Typography variant="h5" sx={{ color: 'var(--color-text-secondary)', fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.7rem' } }}>
            Soy Dev
          </Typography>
        </Box>
      </Box>

      {/* Rest of your content can go here */}
      {selectedSection === 'About' && (
        <Box sx={{ p: 3, display: 'flex', flexDirection: 'row', gap: 2 }}>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1em' }}>
            Hi I love building cool and fun stuff with the current tech.<br />
            Cause its just for fun and enjoyment.
          </p>
          <img
            src="src/assets/skills.svg"
            alt="Varun Mohanta"
            style={{
              width: '500px',
              height: '500px',
              objectFit: 'cover',
            }}
          />
        </Box>
      )}
      {selectedSection === 'Projects' && (
        <Box sx={{ p: 3 }}>
          <Typography variant="h5" sx={{ color: 'var(--color-primary)', mb: 2 }}>Projects</Typography>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            Coming soon: A showcase of my favorite projects!
          </p>
          <p>
            Skills ferowfhboewbh
            wefvt btehr
            db6ruhbh
          </p>
        </Box>
      )}
      {selectedSection === 'Experiences' && (
        <Box sx={{ p: 3 }}>
          <Typography variant="h5" sx={{ color: 'var(--color-primary)', mb: 2 }}>Experiences</Typography>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            Coming soon: My professional and learning journey!
          </p>
        </Box>
      )}
    </Box>
  );
}
Mainbox.propTypes = {
  selectedSection: PropTypes.string.isRequired,
};
Mainbox.propTypes = {
  selectedSection: PropTypes.string.isRequired,
};
export default Mainbox;