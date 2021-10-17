const mockData = {
  managerComplete: {
    name: "NTWARI Hugues",
    nId: "1199680127478028",
    phoneNumber: "250781407229",
    email: "ntwari.huguess@gmail.com",
    password: "18700",
    status: "inactive",
    dob: "01/16/1996",
    position: "MANAGER",
  },
  managerInvalidId: {
    name: "NTWARI Hugues",
    nId: "1199680",
    phoneNumber: "250781407229",
    email: "ntwari.huguess@gmail",
    password: "18700",
    status: "inactive",
    dob: "01/16/1996",
    position: "MANAGER",
  },
  managerInvalidEmail: {
    name: "NTWARI Hugues",
    nId: "1199680127478028",
    phoneNumber: "250781407229",
    email: "ntwari.huguess",
    password: "18700",
    status: "inactive",
    dob: "01/16/1996",
    position: "MANAGER",
  },
  managerAlreadyExists: {
    name: "NTWARI Hugues",
    nId: "1199680127478028",
    phoneNumber: "250781407229",
    email: "ntwari.huguess@gmail.com",
    password: "18700",
    status: "inactive",
    dob: "01/16/1996",
    position: "MANAGER",
  },
  managerValidCredentials: {
    email: "ntwari.huguess@gmail.com",
    password: "18700",
  },
  managerInvalidCredentialsEmail: {
    email: "niyooooo@gmail.com",
    password: "189999",
  },
  managerNoExistentResetEmail: {
    email: "niyooooo@gmail.com",
    
  },
  managerWithExistingResetEmail: {
    email: "ntwari.huguess@gmail.com",
    
  },
  EmployeeComplete: {
    name: "Niyo Eric",
    nId: "1199680127478028",
    phoneNumber: "250781407229",
    email: "niyoeric@gmail.com",
    status: "inactive",
    dob: "01/16/1996",
    position: "DEVOPS",
  },
  EmployeeAlreadyExists: {
    name: "Niyo Eric",
    nId: "1199680127478028",
    phoneNumber: "250781407229",
    email: "niyoeric@gmail.com",
    status: "inactive",
    dob: "01/16/1996",
    position: "DEVOPS",
  },
};

export default mockData