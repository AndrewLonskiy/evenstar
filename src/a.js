console.log('WWWWWWWWWWWW');



let profile = {};
const test = getProfile();
test.then((res) => {
    profile = res.data;
    return getEvents()
})
    .then((res) => {
        console.log(res, 'events')
        console.log(profile, 'profile')
    })
    .catch((err) => console.log(err))

function getProfile ()  {
    return new Promise( (resolve, reject) => {
        $.ajax({
            url: 'http://kolbasa.qbex.io/api/profile/2',
            method: 'GET',           // указываем URL и
            dataType : "json",
            headers: {
                Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjNkYjJmZTJjNzQxNTY1OGMyNDg0OTE2N2Q3ZTk2OTEwOWYwYjhlOWZmYWYzNTQzNTQ0ZDFkZjllOGUyNzgzNzg4ZGQ3MTUzN2ViYmIwMjg0In0.eyJhdWQiOiIxIiwianRpIjoiM2RiMmZlMmM3NDE1NjU4YzI0ODQ5MTY3ZDdlOTY5MTA5ZjBiOGU5ZmZhZjM1NDM1NDRkMWRmOWU4ZTI3ODM3ODhkZDcxNTM3ZWJiYjAyODQiLCJpYXQiOjE1NzI2ODM5NTUsIm5iZiI6MTU3MjY4Mzk1NSwiZXhwIjoxNjA0MzA2MzU1LCJzdWIiOiI0Iiwic2NvcGVzIjpbXX0.FTcopOE1jjSMCV-QJzvJ_Rp-J5aBNLMNM-z6mI2EPKPQaNeloNfeBxohJJbVnW3DbN_JWSWxi9SECDAL2XcfySNAlboYMfCmeF4YeDSnhZVXzYa20T2Sl9hQ9I1eJeRCLajWTzOwuGnmD1-3_iKGg1_yo_Sd9GksYaSrlZEDku2RFogqtw5q6mYWA_IsvLqjTD0meiB4U5YLzBAQPz9MoTQ7JcRlRbP2_DpslyeGN0DoV6gxHR1LoEgjEijEEJ-uBq9Ti31cpmkKkD-vlopls4AyWUXZBdR9pwPtqei_O829JlWk5hVDJfrmXnzhDpqs6m28NxOKQP6afTqW5DpgTZxOt5uWsc9F8kX_5eaQgVfBzpI2xLt35BtqxE-wwxx20pD65XOFL8B3hcaC7J0yTGDBo_UTJRdKf8UIccPFKravRUWCPzsKjcULHX7hEpyYS6CwGp6MfeuZC8fpx4_Huq6xrFxvgF-N8okxMXTQsdWuNEHnrXMt8VAJuG-1Cw3hmGib-JIDEimpsNbKbrmZYrc5EkDB1Zp9GcKqbJvxEuLqVjp5_gIfE6uJxPn4jTCj_DYgQxLdZQ_SvK2fJo_QHAonYxXjuRN8vOJmvkkmSFjf5IUO-Ka7nCOHxr4ELcwLDZly67zYw5TcbEuWcAv5BTfTYW_Ye9Zxj2Ew48DDNVg'
            },               // тип загружаемых данных
            success: function (data, textStatus) {
                resolve({data, textStatus}) // вешаем свой обработчик на функцию success
            },
            error: function (data, textStatus) {
                reject({data, textStatus}) // вешаем свой обработчик на функцию success
            },
        });
    })
};

function getEvents ()  {
    return new Promise( (resolve, reject) => {
        $.ajax({
            url: 'http://kolbasa.qbex.io/api/get_events',
            method: 'GET',           // указываем URL и
            dataType : "json",
            headers: {
                Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjNkYjJmZTJjNzQxNTY1OGMyNDg0OTE2N2Q3ZTk2OTEwOWYwYjhlOWZmYWYzNTQzNTQ0ZDFkZjllOGUyNzgzNzg4ZGQ3MTUzN2ViYmIwMjg0In0.eyJhdWQiOiIxIiwianRpIjoiM2RiMmZlMmM3NDE1NjU4YzI0ODQ5MTY3ZDdlOTY5MTA5ZjBiOGU5ZmZhZjM1NDM1NDRkMWRmOWU4ZTI3ODM3ODhkZDcxNTM3ZWJiYjAyODQiLCJpYXQiOjE1NzI2ODM5NTUsIm5iZiI6MTU3MjY4Mzk1NSwiZXhwIjoxNjA0MzA2MzU1LCJzdWIiOiI0Iiwic2NvcGVzIjpbXX0.FTcopOE1jjSMCV-QJzvJ_Rp-J5aBNLMNM-z6mI2EPKPQaNeloNfeBxohJJbVnW3DbN_JWSWxi9SECDAL2XcfySNAlboYMfCmeF4YeDSnhZVXzYa20T2Sl9hQ9I1eJeRCLajWTzOwuGnmD1-3_iKGg1_yo_Sd9GksYaSrlZEDku2RFogqtw5q6mYWA_IsvLqjTD0meiB4U5YLzBAQPz9MoTQ7JcRlRbP2_DpslyeGN0DoV6gxHR1LoEgjEijEEJ-uBq9Ti31cpmkKkD-vlopls4AyWUXZBdR9pwPtqei_O829JlWk5hVDJfrmXnzhDpqs6m28NxOKQP6afTqW5DpgTZxOt5uWsc9F8kX_5eaQgVfBzpI2xLt35BtqxE-wwxx20pD65XOFL8B3hcaC7J0yTGDBo_UTJRdKf8UIccPFKravRUWCPzsKjcULHX7hEpyYS6CwGp6MfeuZC8fpx4_Huq6xrFxvgF-N8okxMXTQsdWuNEHnrXMt8VAJuG-1Cw3hmGib-JIDEimpsNbKbrmZYrc5EkDB1Zp9GcKqbJvxEuLqVjp5_gIfE6uJxPn4jTCj_DYgQxLdZQ_SvK2fJo_QHAonYxXjuRN8vOJmvkkmSFjf5IUO-Ka7nCOHxr4ELcwLDZly67zYw5TcbEuWcAv5BTfTYW_Ye9Zxj2Ew48DDNVg'
            },               // тип загружаемых данных
            success: function (data, textStatus) {
                resolve({data, textStatus}) // вешаем свой обработчик на функцию success
            },
            error: function (data, textStatus) {
                reject({data, textStatus}) // вешаем свой обработчик на функцию success
            },
        });
    })
}