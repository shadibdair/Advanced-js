class HandleUsers{
    static url = "https://reqres.in/api/users"

    static async requestExecuter(urlParam, method , reqParam){
       let res=await fetch(this.url+urlParam ,{method, ...reqParam});
       return res.status==204 || res.json();      
    }


    static async getUsers(){
        let res=await this.requestExecuter("?page=2","GET",{});
        console.log(res.data);
    }


    static async deleteUsers(){
        let res=await this.requestExecuter("/2","DELETE",{});
        console.log(res);
    }

    static async updateUsers(){
        let res=await this.requestExecuter("/2","PUT",{ 
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(
                {
                    "name": "morpheus",
                    "job": "leader"
                }
            )});
        console.log(res);
    }


    static async addUsers(){
        let res=await this.requestExecuter("/2","POST",{ 
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(
                {
                    "name": "morpheus",
                    "job": "leader"
                }
            )});
        console.log(res);
    }
}
