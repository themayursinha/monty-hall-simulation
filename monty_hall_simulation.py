import random

def play_monty_hall():
    doors = ['goat', 'goat', 'car']
    random.shuffle(doors)

    print("Welcome to the Monty Hall Game!")
    print("There are 3 doors in front of you: 1, 2, and 3. Behind one door is a car, and behind the other two are goats.")

    choice = int(input("Choose a door (1, 2, or 3): ")) - 1  # Convert to 0-based index

    # Host reveals a goat
    reveals = [i for i in range(3) if doors[i] == 'goat' and i != choice]
    door_to_reveal = random.choice(reveals)
    print(f"The host reveals a goat behind door {door_to_reveal + 1}")

    # Ask if the player wants to switch
    switch = input(f"Do you want to switch from door {choice + 1}? (yes/no): ").lower() == 'yes'
    if switch:
        # The player switches to the other unopened, unrevealed door
        remaining_doors = [i for i in range(3) if i != choice and i != door_to_reveal]
        choice = remaining_doors[0]

    # Reveal the outcome
    if doors[choice] == 'car':
        print("Congratulations! You've won a car!")
    else:
        print("Sorry, you've won a goat.")
    print(f"The car was behind door {doors.index('car') + 1}")

if __name__ == "__main__":
    play_monty_hall()
