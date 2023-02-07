import DataTable from './components/DataTable';

function Transactions() {
  const transactionColumns = ["Transaction ID", "Source", "Customer name", "Customer email", "Amount", "Request date", "Status"]
  const transactionValues = [
  {
    "Customer name": "Kaseem Graham",
    "Customer email": "magna.et@google.edu",
    "Transaction ID": "H8F 3N6",
    "Amount": "$82.63",
    "Request date": "29.15.2022",
    "Source": "Access",
    "Status": "Successful"
  },
  {
    "Customer name": "Galvin Vincent",
    "Customer email": "consequat.lectus.sit@outlook.ca",
    "Transaction ID": "L3F 6O4",
    "Amount": "$81.90",
    "Request date": "06.47.2023",
    "Source": "UBA",
    "Status": "Pending"
  },
  {
    "Customer name": "Daria Schmidt",
    "Customer email": "aliquet.vel@yahoo.org",
    "Transaction ID": "D7J 4M7",
    "Amount": "$37.02",
    "Request date": "18.01.2022",
    "Source": "Access",
    "Status": "Pending"
  },
  {
    "Customer name": "Cathleen Thomas",
    "Customer email": "egestas@protonmail.org",
    "Transaction ID": "L4O 5F7",
    "Amount": "$49.48",
    "Request date": "17.21.2023",
    "Source": "GTB",
    "Status": "Successful"
  },
  {
    "Customer name": "Robert Palmer",
    "Customer email": "nunc.quisque@hotmail.couk",
    "Transaction ID": "H0T 4V8",
    "Amount": "$54.52",
    "Request date": "21.30.2023",
    "Source": "UBA",
    "Status": "Pending"
  },
  {
      "Customer name": "Rebekah Fuller",
      "Customer email": "metus.vivamus.euismod@aol.couk",
      "Transaction ID": "N9C 0W7",
      "Amount": "$63.94",
      "Request date": "18.40.2022",
      "Source": "GTB",
      "Status": "Successful"
    },
    {
      "Customer name": "Ferdinand Dickson",
      "Customer email": "consequat.dolor.vitae@outlook.couk",
      "Transaction ID": "S2B 2R7",
      "Amount": "$75.70",
      "Request date": "22.24.2024",
      "Source": "Access",
      "Status": "Pending"
    },
    {
      "Customer name": "Zelda Powell",
      "Customer email": "odio.semper@hotmail.ca",
      "Transaction ID": "G1H 1W1",
      "Amount": "$92.17",
      "Request date": "19.15.2022",
      "Source": "FCMB",
      "Status": "Pending"
    },
    {
      "Customer name": "Inga Bauer",
      "Customer email": "sed@outlook.net",
      "Transaction ID": "G1U 8F4",
      "Amount": "$15.77",
      "Request date": "01.46.2023",
      "Source": "UBA",
      "Status": "Pending"
    },
    {
      "Customer name": "Illana Santos",
      "Customer email": "maecenas.mi@icloud.net",
      "Transaction ID": "H9O 7D7",
      "Amount": "$4.15",
      "Request date": "12.06.2022",
      "Source": "UBA",
      "Status": "Successful"
    },
    {
        "Customer name": "Candace Pratt",
        "Customer email": "sollicitudin.orci@google.com",
        "Transaction ID": "Z4H 5O3",
        "Amount": "$54.43",
        "Request date": "11.16.2023",
        "Source": "GTB",
        "Status": "Successful"
      },
      {
        "Customer name": "Teagan Newman",
        "Customer email": "consectetuer.euismod@icloud.ca",
        "Transaction ID": "B1G 0U4",
        "Amount": "$5.97",
        "Request date": "14.59.2022",
        "Source": "FCMB",
        "Status": "Successful"
      },
      {
        "Customer name": "Ann Ross",
        "Customer email": "ut.dolor@outlook.ca",
        "Transaction ID": "R2M 8Z3",
        "Amount": "$4.91",
        "Request date": "22.09.2023",
        "Source": "Zenith",
        "Status": "Pending"
      },
      {
        "Customer name": "Gage Blackwell",
        "Customer email": "molestie.arcu@outlook.com",
        "Transaction ID": "M1N 3O7",
        "Amount": "$59.05",
        "Request date": "24.42.2023",
        "Source": "UBA",
        "Status": "Pending"
      },
      {
        "Customer name": "Hope Walker",
        "Customer email": "vel.pede.blandit@yahoo.couk",
        "Transaction ID": "P4P 7F6",
        "Amount": "$85.70",
        "Request date": "14.00.2022",
        "Source": "Zenith",
        "Status": "Successful"
      },
      {
          "Customer name": "Vladimir Mccall",
          "Customer email": "morbi.metus.vivamus@protonmail.edu",
          "Transaction ID": "I8I 8U5",
          "Amount": "$38.29",
          "Request date": "08.04.2022",
          "Source": "FCMB",
          "Status": "Successful"
        },
        {
          "Customer name": "Aspen Tran",
          "Customer email": "nec.diam.duis@aol.com",
          "Transaction ID": "U1D 5R5",
          "Amount": "$59.47",
          "Request date": "21.34.2022",
          "Source": "Zenith",
          "Status": "Pending"
        },
        {
          "Customer name": "Ashton Barlow",
          "Customer email": "tellus.suspendisse@google.edu",
          "Transaction ID": "V6L 3B3",
          "Amount": "$73.32",
          "Request date": "08.45.2023",
          "Source": "GTB",
          "Status": "Successful"
        },
        {
          "Customer name": "Wayne Santos",
          "Customer email": "tellus.phasellus@protonmail.couk",
          "Transaction ID": "B7M 6U3",
          "Amount": "$79.69",
          "Request date": "13.53.2023",
          "Source": "UBA",
          "Status": "Pending"
        },
        {
          "Customer name": "Xanthus Conway",
          "Customer email": "felis.orci@outlook.edu",
          "Transaction ID": "J7P 6G0",
          "Amount": "$45.54",
          "Request date": "17.13.2023",
          "Source": "Zenith",
          "Status": "Pending"
        },
        {
            "Customer name": "Brady Emerson",
            "Customer email": "dapibus@yahoo.org",
            "Transaction ID": "O4K 3D2",
            "Amount": "$50.63",
            "Request date": "24.59.2023",
            "Source": "UBA",
            "Status": "Pending"
          },
          {
            "Customer name": "Raja Ross",
            "Customer email": "auctor.velit@yahoo.ca",
            "Transaction ID": "T8E 8D4",
            "Amount": "$81.67",
            "Request date": "09.03.2022",
            "Source": "FCMB",
            "Status": "Pending"
          },
          {
            "Customer name": "Sonia Herring",
            "Customer email": "aliquam.arcu@google.com",
            "Transaction ID": "X7F 1U4",
            "Amount": "$30.03",
            "Request date": "08.39.2023",
            "Source": "FCMB",
            "Status": "Pending"
          },
          {
            "Customer name": "Hall Bauer",
            "Customer email": "auctor.velit@hotmail.edu",
            "Transaction ID": "K5U 6W2",
            "Amount": "$66.28",
            "Request date": "21.00.2023",
            "Source": "GTB",
            "Status": "Successful"
          },
          {
            "Customer name": "Rinah Koch",
            "Customer email": "ante@outlook.org",
            "Transaction ID": "D9J 2M2",
            "Amount": "$3.60",
            "Request date": "27.03.2022",
            "Source": "Zenith",
            "Status": "Successful"
          }
]
  return (<DataTable title="Transaction history" data={{ head: transactionColumns, body: transactionValues}} />);
}

export default Transactions;