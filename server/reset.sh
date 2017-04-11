#! /bin/bash

rm -rf $(dirname $0)/main/migrations
rm -rf $(dirname $0)/root/migrations
rm -rf $(dirname $0)/session/migrations
rm -rf $(dirname $0)/statement/migrations
rm -rf $(dirname $0)/translator/migrations

python3 $(dirname $0)/../manage.py makemigrations main
python3 $(dirname $0)/../manage.py makemigrations root
python3 $(dirname $0)/../manage.py makemigrations session
python3 $(dirname $0)/../manage.py makemigrations statement
python3 $(dirname $0)/../manage.py makemigrations translator

python3 $(dirname $0)/../manage.py migrate
bash $(dirname $0)/load.sh