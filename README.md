### Groupify
Authors		: @DarkGuy10
Start Date  : 
End Date    : 
Language    : Javascript [Vanilla JS]
Version     : 0.0 [Beta]

## Description:
Creates a workaround for adding group chats to Quora.
The basic idea is as stated below:

## Groups:
NewGroup Button creates a 'group' by selecting a few users, combining their IDs and creating a group_id, from which the participants can be re-engineered.
#ALERT : ONCE A GROUP IS CREATED, NEW PARTICIPANTS CANNOT BE ADDED, BCOZ WE CANNOT DO ANYTHING SERVER SIDED STUFF
Once a new group is made, the the group_id gets DMed to all the added participants.
All the participants must have this extension installed, else everything will get messed up.

## How Are Msgs Sent?
Basically, when somebody sends a message, it is DMed to everyone like this:
Message Sent on Group : bruh, you're dead
Actual Message DMed to participants : grp:group_id:bruh, you're dead
A JS on the participant hides the DM, and shows the message inside the group chat

## What else do we need?
We need to figure out how to POST messages using JS
Also, we need to use browser's local storage and/or cookies to store what groups the users are in.