CREATE TABLE fruits (
  id SERIAL PRIMARY KEY,
  fruit VARCHAR(255)
);

INSERT INTO fruits (fruit) VALUES
  ('apple'),
  ('banana'),
  ('cherry'),
  ('date'),
  ('elderberry');

CREATE FUNCTION animate_splice() RETURNS void AS $$
BEGIN
  -- Get the fruits list from the database
  SELECT fruit INTO fruits FROM fruits;

  -- Perform the splice operation and store the removed items
  let removed_items = fruits.splice(2, 2, 'grape', 'kiwi');

  -- Clear the existing list
  DELETE FROM fruits;

  -- Iterate over the modified fruits array and insert new rows into the database
  FOREACH fruit IN ARRAY fruits DO
    INSERT INTO fruits (fruit) VALUES (fruit);
  END LOOP;

  -- Create list items for the removed items and apply the 'removed' class
  FOREACH removed_item IN ARRAY removed_items DO
    INSERT INTO fruits (fruit) VALUES (removed_item);
  END LOOP;
END;
$$ LANGUAGE plpgsql;

SELECT animate_splice();
