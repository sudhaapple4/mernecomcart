//http://localhost:8000
export function createUser(userInfo){
    return new Promise(async (resolve, reject)=>{
        try{
            const response= await fetch('/auth/signup',{method:'POST',body:JSON.stringify(userInfo),headers:{'content-type':'application/json'}});
            if(response.ok){
                const data = await response.json();
                resolve(data);
            }else{
                const error = await response.status;
                reject(error)
            }
        }catch(err){
            reject(err)
        }
    })
}

export function loginUser(loginInfo) {
    return new Promise(async (resolve, reject) => {
      console.log('===loginInfo ',loginInfo)
      try {
        const response = await fetch('/auth/login', {
          method: 'POST',
          body: JSON.stringify(loginInfo),
          headers: { 'content-type': 'application/json' },
        });
        // console.log('=======================================response ',response)
        if (response.ok) {
          const data = await response.json();
        //   console.log('----------------------succ ',data)
          resolve({ data });
        } else {
          const error = await response.status //.text();
        //   console.log('---error ',error)
          reject(error);
        }
      } catch (error) {
        reject( error );
      }
  
    });
  }

  export function checkAuth(token){
    return new Promise (
        async (resolve,reject)=>{
            // console.log('from api token ',token)
            try{
                const response = await fetch('/auth/check',{
                    headers: {Authorization: `Bearer ${token}`}
                  });
                //   console.log('=======================================response ',response)
                if (response.ok){
                    const data = await response.json();
                    resolve({ data });
                }else{
                    const error =(await response).status //'Error Unauthorized'//await response
                    reject(error)
                }
            }catch (error){
                reject(error)
            }
        }
    )
  }
  
  export function resetPasswordRequest(email) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch('/auth/resetPasswordRequest', {
          method: 'POST',
          body: JSON.stringify({email}),
          headers: { 'content-type': 'application/json' },
        });
        if (response.ok) {
          const data = await response.json();
          resolve({ data });
        } else {
          const error = await response.text();
          reject(error);
        }
      } catch (error) {
        reject( error );
      }
  
    });
  }
  
  export function resetPassword(data) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch('/auth/resetPassword', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: { 'content-type': 'application/json' },
        });
        if (response.ok) {
          const data = await response.json();
          resolve({ data });
        } else {
          const error = await response.text();
          reject(error);
        }
      } catch (error) {
        reject( error );
      }
  
    });
  }
  