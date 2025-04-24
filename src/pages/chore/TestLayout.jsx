import { Button } from "@mui/material";
import SingleApplication from "../EmployerSingleApplication/SingleApplication";
import { useState } from "react";

const TestLayout = () => {
  const [open, setOpen] = useState(false);


  return (
    <div className="items-center flex justify-center h-screen"> 
      <Button variant="contained" onClick={() => setOpen(true)}>Xem hồ sơ</Button>
      <SingleApplication open={open} onClose={() => setOpen(false)} role={"EMPLOYER"} data={{
          "id": "KHru246eDW_Qsimqi7AE9",
          "created_at": "2025-04-02T00:12:08.450Z",
          "updated_at": "2025-01-30",
          "cover_letter": "in exercitation Duis cupidatat in exercitation in exercitation Duis cupidatat in exercitation Duis cupidatat in exercitation Duis cupidatat in exercitation Duis cupidatat in exercitation Duis cupidatat in exercitation Duis cupidatat in exercitation Duis cupidatat in exercitation Duis cupidatat in exercitation Duis cupidatat Duis cupidatat in exercitation Duis cupidatat in exercitation Duis cupidatat ",
          "cv_url": "http://res.cloudinary.com/dzjwxsfzb/raw/upload/v1745485849/teksxzrufvnxddjr9c7b",
          "candidate_profile": {
            "id": "FkDD9_imjpxOBvnxy3QaQ",
            "created_at": "2025-04-01T17:02:33.208Z",
            "updated_at": "2025-07-03",
            "avatar_url": "https://scontent.fdad3-1.fna.fbcdn.net/v/t1.15752-9/491279254_1671312437106493_3369118918975572594_n.png?_nc_cat=110&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeEilj9V31wTfOLEZUvylgwVtFqL7v6ZrKG0Wovu_pmsoRsxTYJdJrFa6l5mZlnfHEzO183SGrJACQQTv2qBnUZG&_nc_ohc=TDYVBCqGMcAQ7kNvwFtHQ0u&_nc_oc=AdmbotFbQFRB4UVeMxvpkoNmU9_3LVBQa8pMWxqLPHuOGZB_H-6JonpD4bNmIbGtSTc&_nc_zt=23&_nc_ht=scontent.fdad3-1.fna&oh=03_Q7cD2AHA36ovNYaXPagsyEhbf6_62v9r24qYO0sQnh8m6xvyvg&oe=68310A10",
            "bio": "in exercitation Duis cupidatat in exercitation Duis cupidatat in exercitation Duis cupidatat in exercitation Duis cupidatat in exercitation Duis cupidatat in exercitation Duis cupidatat in exercitation Duis cupidatat in exercitation Duis cupidatat in exercitation Duis cupidatat in exercitation Duis cupidatat in exercitation Duis cupidatat ",
            "date_of_birth": "2025-07-11",
            "education": "GRADUATION",
            "first_name": "Sabryna",
            "gender": true,
            "last_name": "Rippin",
            "phone_number": "(957) 384-0212",
            "province": {
              "code": "83",
              "name": "Madeline McGlynn",
              "name_en": "Elijah Schaefer",
              "full_name": "Adrian Huels",
              "full_name_en": "Mrs. Krystal Herzog"
            },
            "district": {
              "code": "30",
              "name": "Gerald Toy-Lemke",
              "name_en": "Barry Stiedemann",
              "full_name": "Gretchen Bruen DDS",
              "full_name_en": "Joanne Jenkins"
            },
            "social_links": [
              {
                "id": "evUFWiqTByNFCPDwubW_-",
                "type": "INSTAGRAM",
                "url": "https://noxious-intent.net/"
              },
              {
                "id": "evUFWiqTByNFCPDwubW_-",
                "type": "INSTAGRAM",
                "url": "https://noxious-intent.net/"
              },
              {
                "id": "evUFWiqTByNFCPDwubW_-",
                "type": "INSTAGRAM",
                "url": "https://noxious-intent.net/"
              },
              {
                "id": "evUFWiqTByNFCPDwubW_-",
                "type": "INSTAGRAM",
                "url": "https://noxious-intent.net/"
              },
              {
                "id": "evUFWiqTByNFCPDwubW_-",
                "type": "INSTAGRAM",
                "url": "https://noxious-intent.net/"
              },
              
            ]
          }
        }} />
    </div>
  );
}
export default TestLayout;