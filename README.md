# Final-Project

## Group Members

Nathan Kim, 887582997, nathan.kim@csu.fullerton.edu

Ronald Lee, 885884916, ronaldvlee@csu.fullerton.edu

Patrick Phe, 887523785, patrickphe@csu.fullerton.edu

Jason Wong, 886710987, wayson@csu.fullerton.edu

## Description

Twofivefour is a tool for students to use to help explain and translate code.

## How to run

For a development or demo environment, we recommend running the app through Node as it has a faster build process. However, a Dockerfile and docker-compose has also been provided.

### Node.js (Recommended)

1. Install Node.js v18

2. Clone the repository:
```
git clone https://github.com/cpsc-254-spring-2023/cpsc-254-final-project-jason.git
cd cpsc-254-final-project-jason
```

3. Create a .env file with an OpenAI API key

```
echo "OPENAI_API_KEY=[YOUR KEY HERE]" >> .env
```

4. Install dependencies:
```
npm install
# also works with pnpm
pnpm install
```

5. Run in dev mode:
```
npm run dev
```

### Docker

1. Docker

2. Clone the repository:
```
git clone https://github.com/cpsc-254-spring-2023/cpsc-254-final-project-jason.git
cd cpsc-254-final-project-jason
```

3. Create a .env file with an OpenAI API key

```
echo "OPENAI_API_KEY=[YOUR KEY HERE]" >> .env
```

4. Build the image

```
docker build -t twofivefour .
```

5. Run the container

```
docker run -p 3000:3000 twofivefour
```

Alternatively, the image can be built and ran with 

```
docker compose build
docker compose up
```

The app will be available at http://localhost:3000.


A live demo of the app can be found at: https://twofivefour.jason-wong.me/

