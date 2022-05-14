/* CONSUMING API */

const URL = 'https://api.github.com/users/matheus-lincon/repos'
let reposURL = 'https://github.com/matheus-lincon/'

function createProjectElement(name, description, stars, forks, language) {
  // project container
  const projectContainerElement = document.querySelector('.projects')
  const project = document.createElement('div')
  project.classList.add('project')

  /* elementos que fazem parte do projeto */

  //h2 .project-title -> img, span .repos-name
  const projectTitle = document.createElement('h2')
  projectTitle.classList.add('project-title')

  const imgFolder = document.createElement('img')
  const reposName = document.createElement('a')
  const projectDescription = document.createElement('p')

  imgFolder.src = './images/folder.svg'
  imgFolder.alt = 'Folder Image'

  reposName.classList.add('repos-name')
  reposName.target = '_blank'
  reposName.href = reposURL + name
  reposName.innerText = name

  projectTitle.appendChild(imgFolder)
  projectTitle.appendChild(reposName)

  //p .repos-descritption
  projectDescription.classList.add('repos-description')
  projectDescription.innerText = description

  //div .project-status -> div .project-counts -> p .project-stars -> img, span .repos-star
  const projectStatus = document.createElement('div')
  projectStatus.classList.add('project-status')

  const projectCounts = document.createElement('div')
  projectCounts.classList.add('project-counts')

  const projectStars = document.createElement('p')
  projectStars.classList.add('project-stars')

  const reposStar = document.createElement('span')
  reposStar.classList.add('repos-star')
  reposStar.innerText = stars

  const imgStar = document.createElement('img')
  imgStar.src = './images/star.svg'
  imgStar.alt = 'Star Image'

  projectStars.appendChild(imgStar)
  projectStars.appendChild(reposStar)

  const projectBranch = document.createElement('p')
  projectBranch.classList.add('project-branch')

  const imgBranch = document.createElement('img')
  imgBranch.src = './images/git-branch.svg'
  imgBranch.alt = 'Branch Image'

  const reposBranch = document.createElement('span')
  reposBranch.classList.add('repos-branch')
  reposBranch.innerText = forks

  projectBranch.appendChild(imgBranch)
  projectBranch.appendChild(reposBranch)

  projectCounts.appendChild(projectStars)
  projectCounts.appendChild(projectBranch)

  //div .project-language -> span .language-color, p .repos-language
  const projectLanguage = document.createElement('div')
  projectLanguage.classList.add('project-language')

  const languageColor = document.createElement('span')
  languageColor.classList.add('language-color')

  const reposLanguage = document.createElement('p')
  reposLanguage.classList.add('repos-language')
  reposLanguage.innerText = language

  projectLanguage.appendChild(languageColor)
  projectLanguage.appendChild(reposLanguage)

  projectStatus.appendChild(projectCounts)
  projectStatus.appendChild(projectLanguage)

  /* inserindo os elementos no project */
  project.appendChild(projectTitle)
  project.appendChild(projectDescription)
  project.appendChild(projectStatus)

  /* colocando os projetos no project container */
  projectContainerElement.appendChild(project)
}

function getRepos() {
  axios
    .get(URL)
    .then((response) => {
      response.data.forEach((e) => {
        /* DOM */

        createProjectElement(
          e.name,
          e.description,
          e.stargazers_count,
          e.forks_count,
          e.language
        )

        /* ======== */
      })
    })
    .catch((error) => console.error(error))
}

getRepos()

/* ======== */
