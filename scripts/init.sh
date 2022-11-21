#! /bin/bash

read -p "프로젝트 이름을 입력해주세요. 👉 " name
read -r -p "프로젝트 설명을 입력해주세요. 👉 " description
read -p "프로젝트 담당자의 이름을 입력해주세요. 👉 " owner

trimmedDescription="${description// /_}"
trimmedOwner="${owner// /_}"

yarn hygen service new --name $name --owner $trimmedOwner --description $trimmedDescription
yarn
