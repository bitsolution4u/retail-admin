'use client';
// ** React Imports
import { useState, useEffect } from 'react';
// ** Next Import
import Link from 'next/link';
// ** MUI Components
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CardContent from '@mui/material/CardContent';
import { styled, useTheme } from '@mui/material/styles';
import MuiCard from '@mui/material/Card';
import InputAdornment from '@mui/material/InputAdornment';
import MuiFormControlLabel from '@mui/material/FormControlLabel';
// import { handleUserReducer } from '@/store/reducer/auth-reducer';
// ** Custom Component Import

// ** Icon Imports

// ** Configs
// import AuthLayout from './auth-layout';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
// import fetcher from '@/configs/api';
// import { useForm } from 'react-hook-form';
// import axiosWithCredential from '@/configs/api/axiosWithCredential';
// import userLogOut from '@/@core/hooks/logout';
import CustomTextField from '@/@core/component/mui/text-field';
import IconifyIcon from '@/@core/component/icon';
// ** Styled Components
const Card = styled(MuiCard)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: { width: '25rem' },
}));

const LinkStyled = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: `${theme.palette.primary.main} !important`,
}));

const FormControlLabel = styled(MuiFormControlLabel)(({ theme }) => ({
  '& .MuiFormControlLabel-label': {
    color: theme.palette.text.secondary,
  },
}));

const Login = () => {
  // const { register, handleSubmit, reset } = useForm();

  const router = useRouter();
  const [totalUser, setTotalUser] = useState(1);
  // const { isLogin } = useSelector((state) => state.user);
  const [values, setValues] = useState({
    password: '',
    showPassword: false,
  });

  // ** Hook
  const theme = useTheme();

  // const dispatch = useDispatch();

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  // const isUserAvailable = () => {
  //   fetcher
  //     .get('/api/auth/user/available-user')
  //     .then((result) => {
  //       console.log(result?.data?.totalUser);
  //       setTotalUser(result?.data?.totalUser);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  /*  useEffect(() => {
    isUserAvailable();
  }, []); */
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userCredential'));
    console.log('outside data ', userData);
    /*  if (userData !== null) {
      axiosWithCredential
        .get('/api/auth/user/verify-user')
        .then((result) => {
          if (result?.data?.isLoggedIn) {
            router.push('/admin/dashboard');
          }
        })
        .catch((error) => {
          console.log(error?.response?.status);
          if (error?.response?.status === 401) {
            userLogOut(router);
          }
        });
    } */
  }, [router]);

  /* user login */
  // const onSubmit = async (data) => {
  //     router.push('/admin/dashboard')
  //   console.log(data);
  //   await fetcher
  //     .post('/api/auth/user/login', data)
  //     .then((result) => {
  //       console.log(result);
  //       localStorage.setItem(
  //         'userCredential',
  //         JSON.stringify(result?.data?.data)
  //       );
  //       router.push('/admin/dashboard');
  //       reset();
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  return (
    <>
      <Card sx={{ bgcolor: '#ffffffd6', zIndex: 2, position: 'relative' }}>
        <CardContent>
          <Box
            sx={{
              mb: 3,
              mt: 3,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg
              width={34}
              viewBox="0 0 32 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#7367f0"
                d="M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z"
              />
              <path
                fill="#161616"
                opacity={0.06}
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.69824 16.4364L12.5199 3.23696L16.5541 7.25596L7.69824 16.4364Z"
              />
              <path
                fill="#161616"
                opacity={0.06}
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.07751 15.9175L13.9419 4.63989L16.5849 7.28475L8.07751 15.9175Z"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#7367f0"
                d="M7.77295 16.3566L23.6563 0H32V6.88383C32 6.88383 31.8262 9.17836 30.6591 10.4057L19.7824 22H13.6938L7.77295 16.3566Z"
              />
            </svg>
            <Typography variant="h5" sx={{ ml: 2.5, fontWeight: 700 }}>
              Care Plus
            </Typography>
          </Box>
          <Box sx={{ mb: 4 }}>
            <Typography sx={{ color: 'text.secondary' }}>
              Please sign-in to your account and start the adventure
            </Typography>
          </Box>
          <form
            noValidate
            autoComplete="off"
            onSubmit={(e) => e.preventDefault()}
          >
            <CustomTextField
              autoFocus
              fullWidth
              id="email"
              value="hamidazad020@gmail.com"
              // {...register('email')}
              label="Email"
              //   value="hamidazad020@gmail.com"
              sx={{ mb: 2 }}
              placeholder="john.doe@gmail.com"
            />
            <CustomTextField
              fullWidth
              sx={{ mb: 1.5 }}
              label="Password"
              value="123456@aA"
              // {...register('password')}
              id="auth-login-password"
              placeholder="············"
              //   value="123456@aA"
              onChange={handleChange('password')}
              type={values.showPassword ? 'text' : 'password'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      edge="end"
                      onClick={handleClickShowPassword}
                      onMouseDown={(e) => e.preventDefault()}
                      aria-label="toggle password visibility"
                    >
                      <IconifyIcon
                        fontSize="1.25rem"
                        icon={
                          values.showPassword ? 'tabler:eye' : 'tabler:eye-off'
                        }
                      />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Box
              sx={{
                mb: 1.75,
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <FormControlLabel control={<Checkbox />} label="Remember Me" />
              <Typography component={LinkStyled} href="/auth/forgot-password">
                Forgot Password?
              </Typography>
            </Box>
            <Button
              className="aut-page-btn"
              fullWidth
              type="button"
              // onClick={handleSubmit(onSubmit)}
              variant="contained"
              sx={{ mb: 4, backgroundColor: '#7367F0 !important' }}
            >
              Login
            </Button>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}
            >
              <Typography sx={{ color: 'text.secondary', mr: 2 }}>
                New on our platform?
              </Typography>
              {!totalUser && (
                <Typography component={LinkStyled} href="/auth/register">
                  Create an account
                </Typography>
              )}
            </Box>
            <Divider
              sx={{
                color: 'text.disabled',
                '& .MuiDivider-wrapper': { px: 6 },
                fontSize: theme.typography.body2.fontSize,
                my: (theme) => `${theme.spacing(6)} !important`,
              }}
            >
              or
            </Divider>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <IconButton
                href="/"
                component={Link}
                sx={{ color: '#497ce2' }}
                onClick={(e) => e.preventDefault()}
              >
                <IconifyIcon icon="mdi:facebook" />
              </IconButton>
              <IconButton
                href="/"
                component={Link}
                sx={{ color: '#1da1f2' }}
                onClick={(e) => e.preventDefault()}
              >
                <IconifyIcon icon="mdi:twitter" />
              </IconButton>
              <IconButton
                href="/"
                component={Link}
                onClick={(e) => e.preventDefault()}
                sx={{
                  color: (theme) =>
                    theme.palette.mode === 'light' ? '#272727' : 'grey.300',
                }}
              >
                <IconifyIcon icon="mdi:github" />
              </IconButton>
              <IconButton
                href="/"
                component={Link}
                sx={{ color: '#db4437' }}
                onClick={(e) => e.preventDefault()}
              >
                <IconifyIcon icon="mdi:google" />
              </IconButton>
            </Box>
          </form>
        </CardContent>
      </Card>
    </>
  );
};

export default Login;
