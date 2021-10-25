const LinksSocialMedia = {
          github: "Diogo-Silva-Tiger",
          //youtube: "",
          //facebook: "",
          instagram: "Diogo_Silva1888",
          //twitter: ''
        }

        function changeSocialMediaLinks() { 
            for (let li of socialLinks.children)  {
      const social = li.getAttribute('class')
            li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
            }
        }

        changeSocialMediaLinks()


        function getGitHubProfileInfos(){
            const url = `https://api.github.com/users/${LinksSocialMedia.github}`

            fetch(url)
            .then(response => response.json())
            .then(data => {
                userName.textContent = data.name
                userBio.textContent = data.bio
                userLink.href = data.html_url
                userImage.src = data.avatar_url
                userLogin.textContent = data.login
            })

        }



        getGitHubProfileInfos()












        //ARROW FUNCTIONS
        //Este é uma funcao normal -> function nomedafuncao(){}  
        // esta é uma arrow functions ->argumento => {} se vc quiser uma que nao recebe nada apenas coloque parentezes
 
        //Se usa isso como padrao de escrita, cada empresa tera à sua.

        //camelCase
        //PascalCase
        //snake_case

        // alt+124 para barra vertical

        // ser humano conta 12345678910
        // computador conta 0123456789