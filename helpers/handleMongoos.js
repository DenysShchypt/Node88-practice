// Хук Обробка помилки з невірним записом status
const handleMongoos = (error,data,next)=>{
error.status=400;
next()
};

export default handleMongoos;