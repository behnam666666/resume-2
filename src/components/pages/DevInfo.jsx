import { Typography } from "@mui/material";
import { KeyboardArrowLeftRounded } from "@mui/icons-material";

const Info = ({ children }) => {
    return (
        <Typography
            variant="body1"
            color="black"
            textAlign="left"
            sx={{ mt: 2 }}
        >
            {children}
            <KeyboardArrowLeftRounded
                sx={{
                    verticalAlign: "bottom",
                    color: "primary.main",
                }}
            />
        </Typography>
    );
};

const DevInfo = () => {
    return (
        <>
            <Info>نام و نام خانوادگی : سید بهنام معافی مدنی </Info>
            <Info>سن : 23</Info>
            <Info>شهر : تنکابن</Info>
            <Info>behnammoafimadani80@gmail.com : آدرس ایمیل</Info>
            <Info>شماره موبایل : 09331746149</Info>
        </>
    );
};

export default DevInfo;
